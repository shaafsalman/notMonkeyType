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
 
    </div>
  );
};


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

const ProtectedRoutes = () => {
  return (
    <>
      <NavigationBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<GameMenu />} /> 
          <Route path="/Home" element={<GameMenu />} /> 
          <Route path="/Home/GameMenu" element={<GameMenu />} /> 
          <Route path="/Home/Leaderboards" element={<Leaderboards />} />
          <Route path="/Home/Friends" element={<Friends />} />
          <Route path="/Home/Scores" element={<Scores />} />
          <Route path="/Home/Settings" element={<Settings />} />
          <Route path="/Home/Profile" element={<Profile />} />
          <Route path="/Home/About" element={<About />} />
          <Route path="/Home/SinglePlayer" element={<SinglePlayer />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
