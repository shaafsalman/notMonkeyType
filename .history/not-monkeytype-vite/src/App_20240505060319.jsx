import React from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
    </BrowserRouter>
  );
}

export default App;
