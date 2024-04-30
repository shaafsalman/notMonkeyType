import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';

const HomePage = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={GameMenu} /> {/* Default route to GameMenu */}
          <Route path="/leaderboard" component={Leaderboards} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;
