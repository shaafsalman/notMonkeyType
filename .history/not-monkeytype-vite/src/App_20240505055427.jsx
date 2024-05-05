import React from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Tester from './components/Pages/tester';
import Background from './components/Spline/background';
import Login from './components/Pages/Login';
import GameMenu from './components/Page-Parts/GameMenu';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
