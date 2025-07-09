import React, { useState, useEffect } from 'react';
import { usePlaylist } from '../hooks/usePlaylist';
import Sidebar from './Sidebar';
import Header from './Header';
import PlaylistForm from './PlaylistForm';
import PlaylistGrid from './PlaylistGrid';
import FloatingButton from './FloatingButton';
import Message from './Message';

const PlaylistApp = ({ onLogout }) => {
    console.log("KOMPONEN PLAYLISTAPP BERHASIL DI-RENDER!");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('all');

  const {
    playlists,
    loading,
    showForm,
    setShowForm,
    editingPlaylist,
    formData,
    fetchPlaylists,
    resetForm,
    handleEdit,
    handleSubmit,
    handleInputChange,
    deletePlaylist,
    message
  } = usePlaylist();

  const filteredPlaylists = playlists.filter(playlist => {
    if (activeNav === 'all') return true;
    if (activeNav === 'fastfood') return playlist.play_genre === 'fastfood' || playlist.play_genre === 'song';
    if (activeNav === 'cafe') return playlist.play_genre === 'cafe';
    if (activeNav === 'fine-dining') return playlist.play_genre === 'fine-dining';
    if (activeNav === 'streetfood') return playlist.play_genre === 'streetfood';
    if (activeNav === 'others') return playlist.play_genre === 'others';
    return true;
  });

  const handleRefresh = () => {
    fetchPlaylists();
  };

  const handleAddPlaylist = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc] flex">
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          loading={loading}
          onRefresh={handleRefresh}
          onAddPlaylist={handleAddPlaylist}
          onLogout={onLogout}
        />

        <main className="flex-1 overflow-auto p-6">
          <Message message={message} />

          <PlaylistForm 
            showForm={showForm}
            editingPlaylist={editingPlaylist}
            formData={formData}
            loading={loading}
            onSubmit={handleSubmit}
            onCancel={resetForm}
            onInputChange={handleInputChange}
          />

          <PlaylistGrid 
            loading={loading && !showForm}
            playlists={playlists}
            filteredPlaylists={filteredPlaylists}
            activeNav={activeNav}
            onEdit={handleEdit}
            onDelete={deletePlaylist}
          />

          <FloatingButton onClick={() => setShowForm(true)} />
        </main>
      </div>
    </div>
  );
};

export default PlaylistApp;