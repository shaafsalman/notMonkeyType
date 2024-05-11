import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleDurationChange, testDuration, testStarted, startTest, endTest }) => {
  return (
    <nav className="navbar flex justify-end items-center px-10 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg transition duration-300">
      <Link to="/home" className="mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
        Back to Menu
      </Link>
      <h1 className="tittleText">notMonkeyType</h1>
      <div className="mode ml-auto">
        Mode: SinglePlayer
      </div>
      <div className="duration-container ml-20">
        <select className="duration bg-white border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-indigo-500 transition duration-300" onChange={handleDurationChange} value={testDuration}>
          <option value={10}>10 seconds</option>
          <option value={30}>30 seconds</option>
          <option value={60}>60 seconds</option>
          <option value={90}>90 seconds</option>
          <option value={120}>120 seconds</option>
        </select>
        <div className="duration-arrow">
          <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" /></svg>
        </div>
      </div>
      {testStarted ? (
        <button className="navBtn ml-6" onClick={endTest}>Stop</button>
      ) : (
        <button className="navBtn ml-6" onClick={startTest}>Start</button>
      )}
    </nav>
  );
}

export default Navbar;
