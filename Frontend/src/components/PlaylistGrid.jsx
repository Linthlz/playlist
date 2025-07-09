import React from 'react';
import { RefreshCw, CookingPot} from 'lucide-react';
import PlaylistCard from './PlaylistCard';

const PlaylistGrid = ({ 
  loading, 
  playlists, 
  filteredPlaylists, 
  activeNav, 
  onEdit, 
  onDelete 
}) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <RefreshCw className="animate-spin mx-auto mb-4 text-[#8B5C2A]" size={48} />
        <p className="text-[#a67c52]">Loading Restaurant...</p>
      </div>
    );
  }

  if (filteredPlaylists.length === 0) {
    return (
      <div className="text-center py-12">
        <CookingPot className="mx-auto mb-4 text-[#d2b48c]" size={64} />
        <p className="text-[#8B5C2A] text-lg">No restaurant found</p>
        <p className="text-[#a67c52] text-sm">
          {playlists.length === 0 
            ? "Create your first playlist to get started!" 
            : `No restaurant match the current filter (${activeNav})`
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredPlaylists.map((playlist) => (
        <PlaylistCard 
          key={playlist.id}
          playlist={playlist}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PlaylistGrid;