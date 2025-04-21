import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSpaces } from '../context/SpacesContext';
import SpaceCard from '../components/spaces/SpaceCard';

const BookmarksPage = () => {
  const { getBookmarkedSpaces, toggleBookmark } = useSpaces();
  const bookmarkedSpaces = getBookmarkedSpaces();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              <Bookmark className="inline-block mr-2" />
              Your Bookmarked Spaces
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Easily access your favorite quiet places for future visits.
            </p>
          </motion.div>
        </div>
        
        {bookmarkedSpaces.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center py-12 bg-white dark:bg-slate-800 rounded-xl shadow-md"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                <Bookmark size={32} className="text-gray-400 dark:text-gray-500" />
              </div>
            </div>
            <h2 className="text-xl font-medium mb-2">No bookmarks yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You haven't saved any quiet spaces to your bookmarks.
            </p>
            <Link 
              to="/map" 
              className="btn btn-primary inline-flex items-center"
            >
              Explore Quiet Spaces
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {bookmarkedSpaces.map((space) => (
              <motion.div key={space.id} variants={itemVariants}>
                <div className="relative">
                  <SpaceCard space={space} />
                  <button
                    onClick={() => toggleBookmark(space.id)}
                    className="absolute top-3 right-3 z-10 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Remove from bookmarks"
                  >
                    <X size={16} className="text-red-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;