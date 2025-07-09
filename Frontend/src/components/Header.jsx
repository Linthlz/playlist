// src/components/Header.jsx

import React from 'react';
import { Plus, RefreshCw, LogOut } from 'lucide-react';

const Header = ({ loading, onRefresh, onAddPlaylist, onLogout }) => {
  return (
    <header className="bg-white border-b border-[#d2b48c] px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#8B5C2A]">Restaurant Recommendation List</h1>
          <p className="text-[#a67c52]">Manage your restaurant collection</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onRefresh}
            disabled={loading}
            className="bg-[#d2b48c] hover:bg-[#c2a178] text-[#8B5C2A] px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            onClick={onAddPlaylist}
            className="bg-[#8B5C2A] hover:bg-[#a67c52] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            Add restaurant
          </button>
          <button
            onClick={onLogout}
            className="bg-[#a67c52] hover:bg-[#8B5C2A] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            title="Logout"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;