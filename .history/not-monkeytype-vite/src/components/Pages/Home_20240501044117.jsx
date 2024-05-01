import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
  const location = useLocation();

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

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
          {location.pathname !== "/About" && ( // Render the link only if not on the About page
            <ScrollLink to="footer" smooth={true} duration={500} className="about-link" onClick={scrollToBottom}>
              About
            </ScrollLink>
          )}
        </div>
      </Router>
      <div id="footer"></div>
    </div>
  );
};

export default HomePage;
