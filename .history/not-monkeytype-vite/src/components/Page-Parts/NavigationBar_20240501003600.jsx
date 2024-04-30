import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/Logo2Transparent.png';

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex items-center justify-between flex-grow py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logoImage} alt="Logo" className="h-20 mr-2" />
          <span className="font-semibold text-xl tracking-tight">Your App Name</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/Leaderboard" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mr-4">
              Leaderboard
            </Link>
            <Link to="/PersonalScores" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mr-4">
              My scores
            </Link>
            <Link to="/settings" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mr-4">
              Settings
            </Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mr-4">
              About
            </Link>
            <Link to="/Profile" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mr-4">
              Profile
            </Link>
          </div>
          <div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;