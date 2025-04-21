import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockSpaces } from '../data/mockData';

const SpacesContext = createContext();

export const useSpaces = () => useContext(SpacesContext);

export const SpacesProvider = ({ children }) => {
  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [filters, setFilters] = useState({
    noiseLevel: null,
    distance: null,
    amenities: [],
    timeOfDay: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('silentecho-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  // Load mock data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSpaces(mockSpaces);
      setFilteredSpaces(mockSpaces);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('silentecho-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Filter spaces based on user filters
  useEffect(() => {
    let result = spaces;

    // Apply noise level filter
    if (filters.noiseLevel !== null) {
      result = result.filter(space => space.noiseLevel <= filters.noiseLevel);
    }

    // Apply time of day filter
    if (filters.timeOfDay) {
      const now = new Date();
      const hour = now.getHours();
      
      if (filters.timeOfDay === 'morning' && (hour < 5 || hour > 11)) {
        result = [];
      } else if (filters.timeOfDay === 'afternoon' && (hour < 12 || hour > 17)) {
        result = [];
      } else if (filters.timeOfDay === 'evening' && (hour < 18 || hour > 22)) {
        result = [];
      } else if (filters.timeOfDay === 'night' && (hour > 4 && hour < 23)) {
        result = [];
      }
    }

    // Apply amenities filter
    if (filters.amenities.length > 0) {
      result = result.filter(space => {
        return filters.amenities.every(amenity => space.amenities.includes(amenity));
      });
    }

    setFilteredSpaces(result);
  }, [filters, spaces]);

  const toggleBookmark = (spaceId) => {
    setBookmarks(prev => {
      if (prev.includes(spaceId)) {
        return prev.filter(id => id !== spaceId);
      } else {
        return [...prev, spaceId];
      }
    });
  };

  const isBookmarked = (spaceId) => {
    return bookmarks.includes(spaceId);
  };

  const getBookmarkedSpaces = () => {
    return spaces.filter(space => bookmarks.includes(space.id));
  };

  const getSpaceById = (id) => {
    return spaces.find(space => space.id === id);
  };

  const applyFilter = (filterKey, value) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      noiseLevel: null,
      distance: null,
      amenities: [],
      timeOfDay: null,
    });
  };

  const addReview = (spaceId, review) => {
    setSpaces(prev => {
      return prev.map(space => {
        if (space.id === spaceId) {
          return {
            ...space,
            reviews: [...space.reviews, review],
            rating: calculateAverageRating([...space.reviews, review])
          };
        }
        return space;
      });
    });
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <SpacesContext.Provider value={{
      spaces,
      filteredSpaces,
      isLoading,
      filters,
      applyFilter,
      clearFilters,
      toggleBookmark,
      isBookmarked,
      getBookmarkedSpaces,
      getSpaceById,
      addReview,
      bookmarks
    }}>
      {children}
    </SpacesContext.Provider>
  );
};