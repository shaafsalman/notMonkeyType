import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
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
              <Route path="/About" 
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </div>
      </Router>

      {/* Link to scroll to About section */}
      <div className="scroll-to-about" onClick={scrollToAbout}>
        <Link to="#">About</Link>
      </div>

      {/* About section */}
      <div ref={aboutRef}><About /></div>
    </div>
  );
};

export default HomePage;
