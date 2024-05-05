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
   <Login/>
  );
}

export default App;
