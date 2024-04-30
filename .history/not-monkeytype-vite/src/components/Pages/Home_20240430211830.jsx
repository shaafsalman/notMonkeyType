import React from 'react';
import { BrowserRouter as Router, Route, useRouteMatch } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';
import "../style/Home.css";

const HomePage = () => {
  const match = useRouteMatch();

  return (
    <Router>
      <div>
        <NavigationBar />
        {match.path === "/" && <GameMenu />}
        {match.path === "/leaderboard" && <Leaderboards />}
        {match.path === "/settings" && <Settings />}
        {match.path === "/about" && <About />}
      </div>
    </Router>
  );
};

export default HomePage;
