import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Friends from '../Page-Parts/Friends'; 
import Scores from '../Page-Parts/Scores'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';
import Footer from '../Page-Parts/Footer';
import Profile from '../Page-Parts/Profile';
import NoPage from '../Page-Parts/NoPage';
import "../style/Home.css";
import Background from '../Spline/background';



const HomePage = () => {
  return (
    <div className="Home">
      <Background/>
      <Router>
      <div>
        <NavigationBar />
        <div className="page-content">
          <Routes>
          <Route path="/Home" element={<GameMenu />} /> 
            <Route path="/Home/GameMenu" element={<GameMenu />} /> 
            <Route path="/Home/Leaderboards" element={<Leaderboards />} />
            <Route path="/Home/Friends" element={<Friends />} />
            <Route path="/Home/Scores" element={<Scores/>} />
            <Route path="/Home/Settings" element={<Settings />} />
            <Route path="/Home/Profile" element={<Profile />} />
            <Route path="/Home/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    
    <Footer/>
    </div>
    
  );
};

export default HomePage;
