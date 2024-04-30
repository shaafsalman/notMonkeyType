import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      
      {/* Options */}
      <ul className="options">
        <li><Link to="/leaderboard" className="option">Leaderboard</Link></li>
        <li><Link to="/settings" className="option">Settings</Link></li>
        <li><Link to="/about" className="option">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
