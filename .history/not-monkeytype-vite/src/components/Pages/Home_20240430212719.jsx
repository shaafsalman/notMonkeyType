import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';
import "../style/Home.css";


const HomePage = () => {
  return (
            <NavigationBar />

    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={GameMenu} /> 
          <Route path="/leaderboard" component={Leaderboards} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" component={About} />
          <Route path="*" element={<NoPage />} />
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;
