import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/Logo2Transparent.png';
import "../style/Home.css";
import '../../index.css'


const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-90 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <img className="h-14 w-auto" src={logoImage} alt="Logo" />
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link to="/Leaderboard" className="nav-link">Leaderboard</Link>
              <Link to="/PersonalScores" className="nav-link">My Scores</Link>
              <Link to="/settings" className="nav-link">Settings</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden h-10 w-10">
                <img src={defaultProfileImage} alt="Profile" className="h-full w-full object-cover" />
              </div>
              <Link to="/Profile" className="nav-link">Profile</Link>
              <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-all duration-300">Log Out</button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/Leaderboard" className="nav-link">Leaderboard</Link>
          <Link to="/PersonalScores" className="nav-link">My Scores</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/Profile" className="nav-link">Profile</Link>
          <button className="nav-link">Log Out</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;