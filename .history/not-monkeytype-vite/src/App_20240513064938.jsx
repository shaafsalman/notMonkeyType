import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Background from './components/Spline/background';
import SinglePlayer  from './components/Emulators/SinglePlayer';
import Home from './components/Pages/Home';
import MultiPlayer from './components/Emulators/MultiPlayer';
import HeroPage from "./components/Pages/heroPage";



const App = () => {
  return (
    <div className="App">
      <Background/>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HeroPage/>} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route path="/*" element={<ProtectedRoutes />} />
            <Route path="/single-player" element={<SinglePlayer />} /> 
            <Route path="/multi-player" element={<MultiPlayer />} /> 
            <Route path="/hero" element={<HeroPage/>} /> 

          </Routes>
        </div>
      </Router>
    </div>
  );
};

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? (
    <>
       <Background/>
      <NavigationBar />
      <div className="page-content">
        <Routes>
          <Route path="/home" element={<GameMenu />} /> 
          <Route path="/Home/GameMenu" element={<GameMenu />} /> 
          <Route path="/Home/Leaderboards" element={<Leaderboards />} />
          <Route path="/Home/Friends" element={<Friends />} />
          <Route path="/Home/Scores" element={<Scores />} />
          <Route path="/Home/Settings" element={<Settings />} />
          <Route path="/Home/Profile" element={<Profile />} />
          <Route path="/Home/About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default App;
