import React from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
