import { useState } from 'react'
import './App.css'
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import NavigationBar from './components/Page-Parts/NavigationBar';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <NavigationBar/>
    </div>
  );
}

export default App
