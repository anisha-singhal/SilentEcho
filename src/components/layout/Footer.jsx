import React from 'react';
import { Volume2, Github as GitHub, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgb(var(--color-primary))] text-white">
                <Volume2 size={18} />
              </div>
              <span className="text-xl font-semibold">SilentEcho</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discover peaceful spaces to relax, focus, and recharge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[rgb(var(--color-primary))] transition-colors">
                <GitHub size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[rgb(var(--color-primary))] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  About SilentEcho
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Add a Space
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--color-primary))] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> for quiet seekers everywhere
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} SilentEcho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;