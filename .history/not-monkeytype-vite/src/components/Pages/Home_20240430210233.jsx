import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import GameMenu from './GameMenu'; // Import the GameMenu component
import Leaderboards from './Leaderboards'; // Import the Leaderboards component
import Settings from './Settings'; // Import the Settings component
import About from './About'; // Import the About component

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
