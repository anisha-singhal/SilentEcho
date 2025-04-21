import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { useSpaces } from '../../context/SpacesContext';
import { amenitiesOptions, timeOfDayOptions, noiseOptions } from '../../data/mockData';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, applyFilter, clearFilters } = useSpaces();
  
  const toggleFilter = () => setIsOpen(!isOpen);
  
const handleNoiseChange = (value) => {
    applyFilter('noiseLevel', value);
};
  
const handleTimeChange = (value) => {
    applyFilter('timeOfDay', value === filters.timeOfDay ? null : value);
};
  
const handleAmenityToggle = (amenity) => {
  const currentAmenities = [...filters.amenities];
  if (currentAmenities.includes(amenity)) {
      applyFilter('amenities', currentAmenities.filter(a => a !== amenity));
  } else {
    applyFilter('amenities', [...currentAmenities, amenity]);
  }
};
  
return (
  <div className="mb-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleFilter}
          className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
          
        {(filters.noiseLevel !== null || filters.timeOfDay !== null || filters.amenities.length > 0) && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 px-3 py-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
          >
            <X size={16} />
            <span>Clear All</span>
          </button>
          )}
      </div>
        
      {/* Filter badges */}
      <div className="hidden md:flex items-center space-x-2 overflow-x-auto">
        {filters.noiseLevel !== null && (
          <div className="px-2 py-1 bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))] rounded-full text-sm">
            Noise: {noiseOptions.find(opt => opt.value === filters.noiseLevel)?.label}
          </div>
        )}
          
        {filters.timeOfDay !== null && (
          <div className="px-2 py-1 bg-[rgb(var(--color-secondary))]/10 text-[rgb(var(--color-secondary))] rounded-full text-sm">
            Time: {timeOfDayOptions.find(opt => opt.id === filters.timeOfDay)?.label}
          </div>
        )}
          
        {filters.amenities.map(amenity => (
          <div key={amenity} className="px-2 py-1 bg-[rgb(var(--color-accent))]/10 text-[rgb(var(--color-accent))] rounded-full text-sm">
            {amenitiesOptions.find(opt => opt.id === amenity)?.label}
          </div>
        ))}
      </div>
    </div>
      
    {isOpen && (
      <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Noise Level Section */}
          <div>
            <h3 className="font-medium mb-2">Noise Level</h3>
            <div className="space-y-2">
              {noiseOptions.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={`noise-${option.value}`}
                    name="noiseLevel"
                    value={option.value}
                    checked={filters.noiseLevel === option.value}
                    onChange={() => handleNoiseChange(option.value)}
                    className="form-radio h-4 w-4 text-[rgb(var(--color-primary))]"
                  />
                  <label htmlFor={`noise-${option.value}`} className="ml-2 text-sm">
                    {option.label}
                  </label>
                </div>
              ))}
              {filters.noiseLevel !== null && (
                <button
                  onClick={() => handleNoiseChange(null)}
                  className="text-sm text-[rgb(var(--color-primary))]"
                >
                  Clear noise filter
                </button>
              )}
            </div>
          </div>
            
          {/* Time of Day Section */}
            <div>
              <h3 className="font-medium mb-2">Time of Day</h3>
              <div className="space-y-2">
                {timeOfDayOptions.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`time-${option.id}`}
                      name="timeOfDay"
                      value={option.id}
                      checked={filters.timeOfDay === option.id}
                      onChange={() => handleTimeChange(option.id)}
                      className="form-radio h-4 w-4 text-[rgb(var(--color-primary))]"
                    />
                    <label htmlFor={`time-${option.id}`} className="ml-2 text-sm">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Amenities Section */}
            <div>
              <h3 className="font-medium mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {amenitiesOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAmenityToggle(option.id)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      filters.amenities.includes(option.id)
                        ? 'bg-[rgb(var(--color-primary))] text-white'
                        : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {filters.amenities.length > 0 && (
                <button
                  onClick={() => applyFilter('amenities', [])}
                  className="text-sm text-[rgb(var(--color-primary))] mt-2"
                >
                  Clear amenities
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;