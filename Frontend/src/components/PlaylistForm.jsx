import React from 'react';
import { GENRES } from '../constants';


const PlaylistForm = ({ 
  showForm, 
  editingPlaylist, 
  formData, 
  loading, 
  onSubmit, 
  onCancel, 
  onInputChange 
}) => {
  if (!showForm) return null;

  return (
    <div className="bg-white rounded-lg p-6 mb-6 border border-[#d2b48c]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#8B5C2A]">
          {editingPlaylist ? 'Edit Playlist' : 'Add Playlist'}
        </h2>
        <button
          onClick={onCancel}
          className="text-[#a67c52] hover:text-[#8B5C2A] transition-colors"
        >
          ×
        </button>
      </div>
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#8B5C2A] mb-2">
              Restaurant Name *
            </label>
            <input
              type="text"
              value={formData.play_name}
              onChange={(e) => onInputChange('play_name', e.target.value)}
              className="w-full px-3 py-2 bg-[#f5f5dc] border border-[#d2b48c] rounded-lg text-[#8B5C2A] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              placeholder="Enter playlist name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#8B5C2A] mb-2">
              URL
            </label>
            <input
              type="url"
              value={formData.play_url}
              onChange={(e) => onInputChange('play_url', e.target.value)}
              className="w-full px-3 py-2 bg-[#f5f5dc] border border-[#d2b48c] rounded-lg text-[#8B5C2A] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              placeholder="https://youtube.com/..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#8B5C2A] mb-2">
              Thumbnail URL
            </label>
            <input
              type="url"
              value={formData.play_thumbnail}
              onChange={(e) => onInputChange('play_thumbnail', e.target.value)}
              className="w-full px-3 py-2 bg-[#f5f5dc] border border-[#d2b48c] rounded-lg text-[#8B5C2A] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              placeholder="https://img.youtube.com/..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#8B5C2A] mb-2">
              Genre
            </label>
            <select
              value={formData.play_genre}
              onChange={(e) => onInputChange('play_genre', e.target.value)}
              className="w-full px-3 py-2 bg-[#f5f5dc] border border-[#d2b48c] rounded-lg text-[#8B5C2A] focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
            >
              {GENRES.map(genre => (
                <option key={genre} value={genre} className="bg-white text-[#8B5C2A]">
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#8B5C2A] mb-2">
            Description
          </label>
          <textarea
            value={formData.play_description}
            onChange={(e) => onInputChange('play_description', e.target.value)}
            className="w-full px-3 py-2 bg-[#f5f5dc] border border-[#d2b48c] rounded-lg text-[#8B5C2A] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
            rows="3"
            placeholder="Enter description..."
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={onSubmit}
            disabled={loading || !formData.play_name.trim()}
            className="bg-[#8B5C2A] hover:bg-[#a67c52] text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : editingPlaylist ? 'Update' : 'Create'}
          </button>
          <button
            onClick={onCancel}
            className="bg-[#d2b48c] hover:bg-[#c2a178] text-[#8B5C2A] px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistForm;