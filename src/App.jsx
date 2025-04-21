import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import SpaceDetailsPage from './pages/SpaceDetailsPage';
import BookmarksPage from './pages/BookmarksPage';

// Context
import { ThemeProvider } from './context/ThemeContext';
import { LocationProvider } from './context/LocationContext';
import { SpacesProvider } from './context/SpacesContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(var(--color-background))]">
        <div className="mb-4">
          <div className="sound-wave">
            <div className="sound-wave-bar"></div>
            <div className="sound-wave-bar"></div>
            <div className="sound-wave-bar"></div>
            <div className="sound-wave-bar"></div>
            <div className="sound-wave-bar"></div>
          </div>
        </div>
        <h1 className="text-2xl font-medium mb-2">SilentEcho</h1>
        <p className="text-gray-500 dark:text-gray-400">Finding your peaceful space...</p>
      </div>
    );
  }

return (
    <ThemeProvider>
      <LocationProvider>
        <SpacesProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/map" element={<MapPage />} />
                  <Route path="/space/:id" element={<SpaceDetailsPage />} />
                  <Route path="/bookmarks" element={<BookmarksPage />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </SpacesProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}

export default App;