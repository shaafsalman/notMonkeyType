import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Friends from '../Page-Parts/Friends'; 
import Scores from '../Page-Parts/Scores'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';
import Profile from '../Page-Parts/Profile';
import NoPage from '../Page-Parts/NoPage';
import "../style/Home.css";

const HomePage = () => {
  return (
    <div className="Home">
      <Router>
      <div>
        <NavigationBar />
        <div className="page-content">
          <Routes>
            <Route path="/GameMenu" element={<GameMenu />} /> 
            <Route path="/Leaderboards" element={<Leaderboards />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Scores" element={<Scores/>} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    <About/>


    </div>
    
  );
};

export default HomePage;
