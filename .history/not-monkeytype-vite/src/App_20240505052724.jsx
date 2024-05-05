import { useState } from 'react'
import './App.css'
// import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Tester from './components/Pages/tester';
import Background from './components/Spline/background';
import Login from './components/Pages/Login';
import { BrowserRouter} from 'react'
import { Route, Routes } from'react-router-dom'
import GameMenu from './components/Page-Parts/GameMenu';

function App() {
  return (
    <BrowserRouter basename= "/app">
      <Routes>
        <Route path = "/"></Route>
        GameMenu


      </Routes>
    <BrowserRouter/>
  );
}

export default App
