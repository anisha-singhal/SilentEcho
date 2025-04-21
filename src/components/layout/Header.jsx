import React, { useState, useEffect } from 'react';
import { Link, useLocation as useRouterLocation } from 'react-router-dom';
import { Menu, X, Volume2, Moon, Sun, Map, Bookmark, Home } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useRouterLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgb(var(--color-primary))] text-white">
            <Volume2 size={18} />
          </div>
          <span className="text-xl font-semibold">SilentEcho</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors duration-200 ${
              location.pathname === '/' 
                ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                : 'hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/map" 
            className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors duration-200 ${
              location.pathname === '/map' 
                ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                : 'hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Map size={18} />
            <span>Map</span>
          </Link>
          <Link 
            to="/bookmarks" 
            className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors duration-200 ${
              location.pathname === '/bookmarks' 
                ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                : 'hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark size={18} />
            <span>Bookmarks</span>
          </Link>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                location.pathname === '/' 
                  ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                  : 'hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/map" 
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                location.pathname === '/map' 
                  ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                  : 'hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              <Map size={20} />
              <span>Map</span>
            </Link>
            <Link 
              to="/bookmarks" 
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                location.pathname === '/bookmarks' 
                  ? 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]' 
                  : 'hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark size={20} />
              <span>Bookmarks</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;