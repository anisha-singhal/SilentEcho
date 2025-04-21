import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Bookmark, Volume2, VolumeX } from 'lucide-react';
import { useSpaces } from '../../context/SpacesContext';
import NoiseLevel from '../ui/NoiseLevel';

const SpaceCard = ({ space }) => {
  const { toggleBookmark, isBookmarked } = useSpaces();
  const bookmarked = isBookmarked(space.id);

  const mainPhoto = space.photos && space.photos.length > 0 ? space.photos[0] : '';

  return (
    <div className="card group transform transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative">
        <Link to={`/space/${space.id}`}>
          <img 
            src={mainPhoto} 
            alt={space.name} 
            className="h-48 w-full object-cover rounded-t-xl"
          />
        </Link>
        <button 
          onClick={() => toggleBookmark(space.id)}
          className="absolute top-3 right-3 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-md backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-slate-800"
          aria-label={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
        >
          <Bookmark 
            size={18} 
            className={bookmarked ? 'fill-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'text-gray-600 dark:text-gray-400'} 
          />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded-md text-sm font-medium shadow-md backdrop-blur-sm">
          {space.type.replace('_', ' ').charAt(0).toUpperCase() + space.type.replace('_', ' ').slice(1)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg truncate">{space.name}</h3>
          <div className="flex items-center space-x-1 text-sm text-yellow-500">
            <Star size={16} className="fill-yellow-500 text-yellow-500" />
            <span>{space.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span className="truncate">{space.address}</span>
        </div>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            {space.noiseLevel <= 2 ? (
              <VolumeX size={16} className="mr-1" />
            ) : (
              <Volume2 size={16} className="mr-1" />
            )}
            <span className="text-sm">Noise Level:</span>
          </div>
          <NoiseLevel level={space.noiseLevel} />
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">{space.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {space.amenities.slice(0, 3).map((amenity) => (
            <span 
              key={amenity} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded-full"
            >
              {amenity.replace('_', ' ')}
            </span>
          ))}
          {space.amenities.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded-full">
              +{space.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <Link 
          to={`/space/${space.id}`}
          className="block w-full text-center py-2 rounded-lg bg-[rgb(var(--color-primary))] text-white font-medium transition-colors hover:bg-opacity-90"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpaceCard;