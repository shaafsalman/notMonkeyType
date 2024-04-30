import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../Page-Parts/NavigationBar';
import GameMenu from '../Page-Parts/GameMenu'; 
import Leaderboards from '../Page-Parts/Leaderboards'; 
import Settings from '../Page-Parts/Settings';
import About from '../Page-Parts/About';
import NoPage from '../Page-Parts/NoPage';
import "../style/Home.css";


const router = createBrowserRouter([
 {
  path: '/',
  element: <HomePage />,
  children: [
    { path: '/', element: <GameMenu /> },
    { path: '/Leaderboards', element: <Leaderboards /> },
    { path: '/Settings', element: <Settings /> },
    { path: '/About', element: <About /> },
    { path: '/*', element: <NoPage /> }
  ]

 }


])

const HomePage = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={GameMenu} /> 
          <Route path="/Leaderboards" component={Leaderboards} />
          <Route path="/Settings" component={Settings} />
          <Route path="/About" component={About} />
          <Route path="*" element={NoPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;
