import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/Logo2Transparent.png';
import "../style/Home.css";


const NavigationBar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <img src={logoImage} alt="Logo" />
    </div>
    
    <ul className="options">
      <li><Link to="/Leaderboard" className="option">Leaderboard</Link></li>
      <li><Link to="/PersonalScores" className="option">scores</Link></li>
      <li><Link to="/settings" className="option">Settings</Link></li>
      <li><Link to="/about" className="option">About</Link></li>


      <li><Link to="/Profile" className="option">Profile</Link></li>
      <button className='actionButton'>LogOut</button>
    </ul>
  </nav>
  
  );
};

export default NavigationBar;
