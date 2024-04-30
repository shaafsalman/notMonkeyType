import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/Logo2Transparent.png';
import "../style/Home.css";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center bg-transparent p-6 rounded shadow-lg">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="h-12" />
      </div>
      
      <ul className="flex space-x-6">
        <li><Link to="/Leaderboard" className="text-white font-bold hover:text-yellow-400">Leaderboard</Link></li>
        <li><Link to="/PersonalScores" className="text-white font-bold hover:text-yellow-400">My Scores</Link></li>
        <li><Link to="/settings" className="text-white font-bold hover:text-yellow-400">Settings</Link></li>
        <li><Link to="/about" className="text-white font-bold hover:text-yellow-400">About</Link></li>

        <li><Link to="/Profile" className="text-white font-bold hover:text-yellow-400">Profile</Link></li>
        <li><button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded transition duration-300 hover:bg-yellow-500">Log Out</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

export default NavigationBar;
