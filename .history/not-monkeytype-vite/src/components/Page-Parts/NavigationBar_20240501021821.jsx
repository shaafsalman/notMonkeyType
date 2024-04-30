import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/Logo2Transparent.png';

const NavigationBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-br from-purple-500 to-indigo-600 lg:rounded-lg lg:my-12 lg:mx-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 lg:h-40 w-auto" src={logoImage} alt="Logo" />
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:block lg:ml-6">
            <div className="flex space-x-4">
            <Link to="/GameMenu" className={`text-white hover:bg-purple-400 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/GameMenu' ? 'bg-purple-900' : 'hover:bg-purple-900 hover:text-white'}`}>GameMenu</Link>
            <Link to="/Leaderboard" className={`text-white hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/Leaderboard' ? 'bg-purple-900' : 'hover:bg-purple-900 hover:text-white'}`}>Leaderboard</Link>
            <Link to="/PersonalScores" className={`text-white hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/PersonalScores' ? 'bg-purple-900' : 'hover:bg-purple-900 hover:text-white'}`}>Scores</Link>
            <Link to="/settings" className={`text-white hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/settings' ? 'bg-purple-900' : 'hover:bg-purple-900 hover:text-white'}`}>Settings</Link>
            <Link to="/about" className={`text-white hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/about' ? 'bg-purple-900' : 'hover:bg-purple-900 hover:text-white'}`}>About</Link>
            <Link to="/Profile" className={`text-white hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/Profile' ? 'bg-purple-900' : 'hover:bg-purple-900 hover:text-white'}`}>Profile</Link>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/GameMenu" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Game Menu</Link>
          <Link to="/Leaderboard" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leaderboard</Link>
          <Link to="/PersonalScores" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Scores</Link>
          <Link to="/settings" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Settings</Link>
          <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/Profile" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
