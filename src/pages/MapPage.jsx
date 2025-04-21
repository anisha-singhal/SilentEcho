import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, List, Layers, X } from 'lucide-react';
import { useSpaces } from '../context/SpacesContext';
import { useLocation } from '../context/LocationContext';

import SearchBar from '../components/search/SearchBar';
import FilterBar from '../components/filters/FilterBar';
import SpaceCard from '../components/spaces/SpaceCard';
import NoiseLevel from '../components/ui/NoiseLevel';

const MapPage = () => {
  const { filteredSpaces, isLoading } = useSpaces();
  const { userLocation, locationError } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedSpace, setSelectedSpace] = useState(null);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleSpaceClick = (space) => {
    setSelectedSpace(space);
  };
  
  return (
    <div className="pt-16 h-screen flex flex-col">
      <div className="flex-grow flex overflow-hidden">
        {/* Sidebar */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: isSidebarOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', bounce: 0.2 }}
          className={`w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-slate-900 overflow-y-auto border-r border-gray-200 dark:border-slate-700 relative flex-shrink-0`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute right-3 top-3 p-2 rounded-full bg-gray-100 dark:bg-slate-800 z-10 md:hidden"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X size={18} /> : <List size={18} />}
          </button>
        
          <div className="p-4">
            <div className="mb-6">
              <SearchBar />
            </div>
            
            <FilterBar />
            
            <div>
              <h2 className="text-xl font-medium mb-4">Places</h2>
              
              {isLoading ? (
                <div className="flex justify-center my-12">
                  <div className="sound-wave">
                    <div className="sound-wave-bar"></div>
                    <div className="sound-wave-bar"></div>
                    <div className="sound-wave-bar"></div>
                    <div className="sound-wave-bar"></div>
                    <div className="sound-wave-bar"></div>
                  </div>
                </div>
              ) : filteredSpaces.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No spaces found with the current filters.</p>
                  <button 
                    onClick={() => {}}
                    className="text-[rgb(var(--color-primary))] hover:underline mt-2"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredSpaces.map((space) => (
                    <div 
                      key={space.id}
                      onClick={() => handleSpaceClick(space)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedSpace?.id === space.id 
                          ? 'bg-[rgb(var(--color-primary))]/10 border border-[rgb(var(--color-primary))]/30' 
                          : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-start">
                        <img 
                          src={space.photos[0]} 
                          alt={space.name}
                          className="w-16 h-16 object-cover rounded-lg mr-3"
                        />
                        <div className="flex-grow">
                          <h3 className="font-medium">{space.name}</h3>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                            <MapPin size={14} className="mr-1" />
                            <span className="truncate">{space.address}</span>
                          </div>
                          <div className="flex items-center space-x-3 mt-2">
                            <div className="flex items-center space-x-1">
                              <span className="text-sm text-gray-600 dark:text-gray-300">Noise:</span>
                              <NoiseLevel level={space.noiseLevel} />
                            </div>
                            <span className="text-sm text-yellow-500">{space.rating} ⭐</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      
        {/* Map */}
        <div className="flex-grow relative overflow-hidden bg-gray-100 dark:bg-slate-800">
          {/* Map Container - In a real app, this would be a proper map component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-[rgb(var(--color-primary))]" />
              <h3 className="text-xl mb-2">Map View</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                {userLocation 
                  ? `User located at ${userLocation.latitude.toFixed(4)}, ${userLocation.longitude.toFixed(4)}`
                  : locationError 
                    ? locationError
                    : 'Loading location data...'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                In a real application, this would be an interactive map showing all the quiet spaces.
              </p>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button 
              className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md"
              aria-label="Zoom in"
            >
              <Layers size={20} />
            </button>
            
            <button 
              onClick={toggleSidebar}
              className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md md:hidden"
              aria-label="Toggle list view"
            >
              <List size={20} />
            </button>
          </div>
          
          {/* Selected Space Info */}
          {selectedSpace && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-4 left-4 right-4 mx-auto max-w-lg bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
            >
              <SpaceCard space={selectedSpace} />
              <button 
                onClick={() => setSelectedSpace(null)}
                className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 dark:bg-slate-700"
                aria-label="Close space details"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;