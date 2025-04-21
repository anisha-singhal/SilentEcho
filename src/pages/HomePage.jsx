import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, VolumeX, Clock, Star, ArrowRight } from 'lucide-react';
import { useSpaces } from '../context/SpacesContext';
import SearchBar from '../components/search/SearchBar';
import SpaceCard from '../components/spaces/SpaceCard';

const HomePage = () => {
  const { filteredSpaces, isLoading } = useSpaces();
  const navigate = useNavigate();
  
  const featuredSpaces = filteredSpaces.slice(0, 3);
  
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
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-primary))]/5 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Find Your Perfect <span className="text-[rgb(var(--color-primary))]">Quiet Space</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover and share peaceful locations for work, study, or relaxation. SilentEcho helps you find serenity in a noisy world.
            </p>
            <div className="max-w-xl mx-auto">
              <SearchBar />
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <VolumeX size={24} className="text-[rgb(var(--color-primary))] mb-4" />
              <h3 className="text-xl font-medium mb-2">Noise-Rated Spaces</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every space is rated for noise level by our community, so you know exactly how quiet it will be.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <MapPin size={24} className="text-[rgb(var(--color-secondary))] mb-4" />
              <h3 className="text-xl font-medium mb-2">Location-Based</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Find quiet spaces near you using our map interface and location services.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Clock size={24} className="text-[rgb(var(--color-accent))] mb-4" />
              <h3 className="text-xl font-medium mb-2">Time-Optimized</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Filter spaces by time of day to find places that are quietest when you need them.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Quiet Spaces</h2>
            <button 
              onClick={() => navigate('/map')}
              className="flex items-center space-x-1 text-[rgb(var(--color-primary))] hover:underline"
            >
              <span>View all</span>
              <ArrowRight size={16} />
            </button>
          </div>
          
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSpaces.map((space) => (
                <motion.div
                  key={space.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SpaceCard space={space} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "SilentEcho helped me find the perfect study spot near campus. Now I have a quiet place to prepare for exams without distractions."
              </p>
              <div className="font-medium">Sarah K.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Graduate Student</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "As a remote worker, finding quiet cafés is essential. This app has transformed my work-from-anywhere lifestyle!"
              </p>
              <div className="font-medium">Michael T.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Software Developer</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "I love that I can filter places by noise level. Found an amazing reading nook I never knew existed just a few blocks from my apartment."
              </p>
              <div className="font-medium">Elena R.</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Book Enthusiast</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[rgb(var(--color-primary))]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to find your quiet space?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start searching for peaceful locations in your area and contribute to our growing community of quiet-seekers.
            </p>
            <button 
              onClick={() => navigate('/map')}
              className="btn btn-primary px-8 py-3"
            >
              Explore the Map
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;