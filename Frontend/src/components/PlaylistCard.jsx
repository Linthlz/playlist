import React from 'react';
import { Edit, Trash2, ExternalLink, Star } from 'lucide-react';
import { GENRE_ICONS } from '../constants';

const PlaylistCard = ({ playlist, onEdit, onDelete }) => {
  const GenreIcon = GENRE_ICONS[playlist.play_genre] || Star;

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-[#d2b48c] hover:border-[#8B5C2A] transition-all duration-200 group">
      {/* Thumbnail */}
      <div className="relative h-40 bg-[#f5f5dc]">
        {playlist.play_thumbnail ? (
          <img
            src={playlist.play_thumbnail}
            alt={playlist.play_name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xMjAgODBMMTgwIDEyMEwxMjAgMTYwVjgwWiIgZmlsbD0iI0Y5NzMxNiIvPgo8L3N2Zz4=';
            }}
          />
        ) : (
          <div className="w-full h-full bg-[#f5f5dc] flex items-center justify-center">
            <GenreIcon size={32} className="text-[#a67c52]" />
          </div>
        )}
        <div className="absolute inset-0 bg-[#8B5C2A] bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
            {playlist.play_url && (
              <a
                href={playlist.play_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d2b48c] hover:bg-[#c2a178] text-[#8B5C2A] p-2 rounded-full transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <button
              onClick={() => onEdit(playlist)}
              className="bg-[#8B5C2A] hover:bg-[#a67c52] text-white p-2 rounded-full transition-colors"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onDelete(playlist.id)}
              className="bg-[#a67c52] hover:bg-[#8B5C2A] text-white p-2 rounded-full transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <GenreIcon size={14} className="text-[#8B5C2A]" />
          <span className="text-xs text-[#a67c52] uppercase tracking-wide">
            {playlist.play_genre}
          </span>
        </div>
        <h3 className="text-[#8B5C2A] font-medium text-sm mb-1 line-clamp-2">
          {playlist.play_name || 'Untitled'}
        </h3>
        {playlist.play_description && (
          <p className="text-[#a67c52] text-xs line-clamp-2">
            {playlist.play_description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;