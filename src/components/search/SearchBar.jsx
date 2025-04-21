import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '../../context/LocationContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const { getUserLocation, isLocating } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/map?q=${encodeURIComponent(query)}`);
    }
  };

  const handleUseCurrentLocation = () => {
    getUserLocation();
    navigate('/map');
  };

  return (
    <div 
      className={`transition-all duration-300 ${
        isExpanded 
          ? 'bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4' 
          : 'bg-transparent p-0'
      }`}
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for quiet places..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
              className="block w-full rounded-lg py-3 pl-10 pr-12 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
            />
            {query && (
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <ArrowRight size={18} className="text-[rgb(var(--color-primary))]" />
              </button>
            )}
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-2">
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              className="flex items-center space-x-2 text-[rgb(var(--color-primary))] hover:underline"
            >
              <MapPin size={16} />
              <span>{isLocating ? 'Getting your location...' : 'Use my current location'}</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;