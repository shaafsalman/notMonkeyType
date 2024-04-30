import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import GameMenu from './GameMenu'; 
import Leaderboards from './Leaderboards'; 
import Settings from './Settings';
import About from './About';

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
