import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/Page-Parts/NavigationBar';
import GameMenu from './components/Page-Parts/GameMenu'; 
import Leaderboards from './components/Page-Parts/Leaderboards'; 
import Friends from './components/Page-Parts/Friends'; 
import Scores from './components/Page-Parts/Scores'; 
import Settings from './components/Page-Parts/Settings';
import About from './components/Page-Parts/About';
import Footer from './components/Page-Parts/Footer';
import Profile from './components/Page-Parts/Profile';
import NoPage from './components/Page-Parts/NoPage';
import "./components/style/Home.css";
import Background from './components/Spline/background';
import Login from './components/Pages/Login';

const App = () => {
  // Custom hook to get the current location
  const location = useLocation();

  // Conditionally render the NavigationBar based on the current location
  const renderNavigationBar = location.pathname !== '/';

  return (
    <div className="App">
      <Background/>
      <Router>
        <div>
          {/* Conditional rendering of the NavigationBar */}
          {renderNavigationBar && <NavigationBar />}
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Login />} /> 
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

export default App;
