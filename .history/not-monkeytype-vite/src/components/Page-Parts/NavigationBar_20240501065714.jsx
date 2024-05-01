import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGamepad, FaListAlt, FaUserFriends, FaChartBar, FaCog, FaUser, FaInfoCircle } from 'react-icons/fa'; // Import required icons
import logoImage from '../../assets/Logo2Transparent.png';

const NavigationBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-br lg:h-20 from-purple-500 to-indigo-600 lg:rounded-lg lg:my-12 lg:mx-20  z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 lg:my-12">
            <img className="h-20 lg:h-40 w-auto" src={logoImage} alt="Logo" />
          </div>
          <div className="flex lg:hidden mx-5">
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
              <Link to="/GameMenu" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/GameMenu' ? 'bg-indigo-800' : ' hover:bg-indigo-900 hover:text-white'}`}>
                <FaGamepad className="inline-block mr-2" />
                GameMenu
              </Link>
              <Link to="/Leaderboards" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/Leaderboards' ? 'bg-indigo-800' : 'hover:bg-indigo-900 hover:text-white'}`}>
                <FaListAlt className="inline-block mr-2" />
                Leaderboard
              </Link>
              <Link to="/Friends" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/Friends' ? 'bg-indigo-800' : 'hover:bg-indigo-900 hover:text-white'}`}>
                <FaUserFriends className="inline-block mr-2" />
                Friends
              </Link>
              <Link to="/Scores" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/Scores' ? 'bg-indigo-800' : 'hover:bg-indigo-900 hover:text-white'}`}>
                <FaChartBar className="inline-block mr-2" />
                Scores
              </Link>
              <Link to="/settings" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/settings' ? 'bg-indigo-800' : 'hover:bg-indigo-900 hover:text-white'}`}>
                <FaCog className="inline-block mr-2" />
                Settings
              </Link>
              <Link to="/Profile" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${location.pathname === '/Profile' ? 'bg-indigo-800' : 'hover:bg-indigo-900 hover:text-white'}`}>
                <FaUser className="inline-block mr-2" />
                Profile
              </Link>
              <Link to="/about" className={`text-white hover:bg-indigo-800 hover:text-white rounded-md ml-10 px-20 py-2 text-lg font-medium ${location.pathname === '/about' ? 'bg-indigo-800' : 'hover:bg-indigo-900 hover:text-white'}`}>
                <FaInfoCircle className="inline-block mr-2" />
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden z-20`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/GameMenu" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaGamepad className="inline-block mr-2" />
            Game Menu
          </Link>
          <Link to="/Leaderboards" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaListAlt className="inline-block mr-2" />
            Leaderboard
          </Link>
          <Link to="/Friends" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaUserFriends className="inline-block mr-2" />
            Friends
          </Link>
          <Link to="/Scores" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaChartBar className="inline-block mr-2" />
            Scores
          </Link>
          <Link to="/settings" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaCog className="inline-block mr-2" />
            Settings
          </Link>
          <Link to="/Profile" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaUser className="inline-block mr-2" />
            Profile
          </Link>
          <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaInfoCircle className="inline-block mr-2" />
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
