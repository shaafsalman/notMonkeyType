import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';
import NoPage from '../Page-Parts/NoPage';
import "../style/Home.css";

const HomePage = () => {
  return (
    <div className="main">
      <Router>
      <div>
        <NavigationBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<GameMenu />} /> 
            <Route path="/Leaderboards" element={<Leaderboards />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
    
  );
};

export default HomePage;
