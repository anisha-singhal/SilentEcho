import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Bookmark, 
  Star, 
  ChevronLeft, 
  Volume2,
  ExternalLink, 
  User
} from 'lucide-react';
import { useSpaces } from '../context/SpacesContext';
import NoiseLevel from '../components/ui/NoiseLevel';

const SpaceDetailsPage = () => {
  const { id } = useParams();
  const { getSpaceById, toggleBookmark, isBookmarked, addReview } = useSpaces();
  const [space, setSpace] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [review, setReview] = useState({
    rating: 5,
    noiseRating: 1,
    comment: '',
  });
  
  const bookmarked = space ? isBookmarked(space.id) : false;
  
  useEffect(() => {
    // Fetch space details
    const fetchSpace = async () => {
      setIsLoading(true);
      const fetchedSpace = getSpaceById(id);
      
      if (fetchedSpace) {
        setSpace(fetchedSpace);
      }
      
      setIsLoading(false);
    };
    
    fetchSpace();
  }, [id, getSpaceById]);
  
  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };
  
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: `r${Date.now()}`,
      userId: 'currentUser',
      username: 'You',
      rating: review.rating,
      noiseRating: review.noiseRating,
      comment: review.comment,
      date: new Date().toISOString(),
    };
    
    addReview(space.id, newReview);
    setSpace(getSpaceById(id)); // Refresh space data
    setIsWritingReview(false);
    setReview({
      rating: 5,
      noiseRating: 1,
      comment: '',
    });
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 flex justify-center">
        <div className="sound-wave">
          <div className="sound-wave-bar"></div>
          <div className="sound-wave-bar"></div>
          <div className="sound-wave-bar"></div>
          <div className="sound-wave-bar"></div>
          <div className="sound-wave-bar"></div>
        </div>
      </div>
    );
  }
  
  if (!space) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 text-center">
        <h2 className="text-2xl font-medium mb-4">Space not found</h2>
        <p className="mb-6">The quiet space you're looking for doesn't exist or has been removed.</p>
        <Link to="/map" className="btn btn-primary">
          Explore Other Quiet Places
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4">
        {/* Back button and actions */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/map" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[rgb(var(--color-primary))]">
            <ChevronLeft size={20} />
            <span>Back to Map</span>
          </Link>
          
          <button 
            onClick={() => toggleBookmark(space.id)}
            className={`flex items-center space-x-1 py-2 px-4 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
            aria-label={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
          >
            <Bookmark 
              size={18} 
              className={bookmarked ? 'fill-[rgb(var(--color-primary))]' : ''} 
            />
            <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>
        </div>
        
        {/* Space Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={space.photos[activeImageIndex]} 
                    alt={`${space.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex mt-2 space-x-2 overflow-x-auto pb-2">
                  {space.photos.map((photo, index) => (
                    <div 
                      key={index}
                      onClick={() => handleImageClick(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                        activeImageIndex === index 
                          ? 'ring-2 ring-[rgb(var(--color-primary))]' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={photo} 
                        alt={`${space.name} thumbnail ${index+1}`}
                        className="w-20 h-16 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">{space.name}</h1>
                
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{space.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1 text-yellow-500 fill-yellow-500" />
                    <span>{space.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Volume2 size={18} className="text-[rgb(var(--color-primary))]" />
                    <span className="font-medium">Noise Level:</span>
                    <NoiseLevel level={space.noiseLevel} size="large" />
                  </div>
                  <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full">
                    {space.type.replace('_', ' ').charAt(0).toUpperCase() + space.type.replace('_', ' ').slice(1)}
                  </span>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-2">About this Space</h2>
                  <p className="text-gray-600 dark:text-gray-300">{space.description}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {space.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2 py-2 px-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-primary))]"></div>
                        <span className="capitalize">{amenity.replace('_', ' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-4">Hours</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(space.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between py-2 px-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <span className="capitalize font-medium">{day}:</span>
                        <span className="text-gray-600 dark:text-gray-300">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium">Reviews</h2>
                    {!isWritingReview && (
                      <button 
                        onClick={() => setIsWritingReview(true)}
                        className="btn btn-outline"
                      >
                        Write a Review
                      </button>
                    )}
                  </div>
                  
                  {isWritingReview && (
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 mb-6">
                      <h3 className="font-medium mb-4">Your Review</h3>
                      <form onSubmit={handleReviewSubmit}>
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Overall Rating</label>
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                type="button"
                                onClick={() => setReview({...review, rating})}
                                className="focus:outline-none"
                              >
                                <Star 
                                  size={24} 
                                  className={`${
                                    rating <= review.rating 
                                      ? 'text-yellow-500 fill-yellow-500' 
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`} 
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Noise Level</label>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Silent</span>
                            <div className="flex space-x-2">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <button
                                  key={level}
                                  type="button"
                                  onClick={() => setReview({...review, noiseRating: level})}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    level === review.noiseRating 
                                      ? 'bg-[rgb(var(--color-primary))] text-white' 
                                      : 'bg-gray-100 dark:bg-slate-700'
                                  }`}
                                >
                                  {level}
                                </button>
                              ))}
                            </div>
                            <span className="text-sm">Noisy</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Your Comments</label>
                          <textarea
                            value={review.comment}
                            onChange={(e) => setReview({...review, comment: e.target.value})}
                            className="w-full p-2 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent bg-white dark:bg-slate-900"
                            rows={3}
                            placeholder="Share your experience with this quiet space..."
                            required
                          ></textarea>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button 
                            type="submit"
                            className="btn btn-primary"
                          >
                            Submit Review
                          </button>
                          <button 
                            type="button"
                            onClick={() => setIsWritingReview(false)}
                            className="btn btn-outline"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  
                  {space.reviews.length === 0 ? (
                    <div className="text-center py-8 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <p className="text-gray-500 dark:text-gray-400">No reviews yet. Be the first to share your experience!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {space.reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4">
                          <div className="flex justify-between">
                            <div className="flex items-center space-x-2 mb-2">
                              <User size={18} className="text-gray-400" />
                              <span className="font-medium">{review.username}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                              <Clock size={14} />
                              <span>{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-4 mb-3">
                            <div className="flex items-center space-x-1">
                              <span className="text-sm text-gray-600 dark:text-gray-300">Rating:</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={16} 
                                    className={`${
                                      i < review.rating 
                                        ? 'text-yellow-500 fill-yellow-500' 
                                        : 'text-gray-300 dark:text-gray-600'
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-1">
                              <span className="text-sm text-gray-600 dark:text-gray-300">Noise:</span>
                              <NoiseLevel level={review.noiseRating} />
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Actions and Map */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 mb-6"
              >
                <h3 className="font-medium text-lg mb-4">Location</h3>
                <div className="aspect-square bg-gray-100 dark:bg-slate-700 rounded-lg mb-4 flex items-center justify-center relative">
                  {/* This would be a real map in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin size={36} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Interactive map would be displayed here
                  </p>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-4">
                  <p>{space.address}</p>
                </div>
                <a 
                  href={`https://maps.google.com/?q=${space.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full flex items-center justify-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Get Directions
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5"
              >
                <h3 className="font-medium text-lg mb-4">Best Times to Visit</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 px-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <span>Weekdays</span>
                    <span className="text-[rgb(var(--color-primary))]">Mornings</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <span>Weekends</span>
                    <span className="text-[rgb(var(--color-primary))]">Afternoons</span>
                  </div>
                  <div className="flex justify-between py-2 px-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <span>Quietest</span>
                    <span className="text-[rgb(var(--color-primary))]">Early Mornings</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailsPage;