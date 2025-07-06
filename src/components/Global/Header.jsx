import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div id="Header_2" className="container mx-auto px-4">
        <div id="Header_3" className="flex items-center justify-between h-16">
          <div id="Header_4" className="flex items-center">
            <Link to="/" className="flex items-center">
              <img id="Header_5" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
              <span id="Header_6" className="ml-2 text-white text-xl font-bold hover:text-gray-200">YourBrand</span>
            </Link>
          </div>

          <nav id="Header_7" className="hidden md:flex space-x-8">
            <Link
              to="/"
              id="Header_8"
              className={`text-white hover:text-gray-200 transition-colors ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
          </nav>

          <div id="Header_9" className="md:hidden">
            <button
              id="Header_10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="Header_11" className="md:hidden pb-4">
            <Link
              to="/"
              id="Header_12"
              className={`block py-2 text-white hover:text-gray-200 transition-colors ${location.pathname === '/' ? 'border-l-4 border-white pl-2' : 'pl-2'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;