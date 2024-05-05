import React from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Tester from './components/Pages/tester';
import Background from './components/Spline/background';
import Login from './components/Pages/Login';
import GameMenu from './components/Page-Parts/GameMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
