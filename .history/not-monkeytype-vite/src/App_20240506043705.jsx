import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login';
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
import SinglePlayer  from './components/Emulators/SinglePlayer';


const App = () => {
  return (
    <div className="App">
      <Background/>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

const ProtectedRoutes = () => {
  return (
    <>
   
       <SinglePlayer/>


    </>
  );
};

export default App;
