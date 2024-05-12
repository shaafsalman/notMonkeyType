import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isMobile, handleDurationChange, testDuration, testStarted, startTest, endTest,mode,finalCode }) => {
  return (
    <nav className={`navbar ${isMobile ? 'flex flex-col items-center justify-center px-4 py-1' : 'flex justify-end items-center px-10 py-1'} bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg transition duration-300`}>
      {!isMobile && (
        <>
          <Link to="/home" className="mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
            Back to Menu
          </Link>
          <h1 className="tittleText">notMonkeyType</h1>
          <div className="mode ml-auto">
            Mode: {mode}
          </div>
          <div className="mode ml-auto">
            Mode: {mode}
          </div>
          <div className="duration-container ml-20">
            <select className="duration bg-white border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-indigo-500 transition duration-300" onChange={handleDurationChange} value={testDuration}>
              <option value={10}>10 seconds</option>
              <option value={30}>30 seconds</option>
              <option value={60}>60 seconds</option>
              <option value={90}>90 seconds</option>
              <option value={120}>120 seconds</option>
            </select>
            {testStarted ? (
              <button className="mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center" onClick={endTest}>Stop</button>
            ) : (
              <button className="mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center" onClick={startTest}>Start</button>
            )}
          </div>
        </>
      )}
      {isMobile && (
        <>
          <Link to="/home" className="my-2 px-2 py-1 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
            Back
          </Link>
          <h1 className="tittleText my-2">notMonkeyType</h1>
          <div className="flex items-center">
            <select className="duration bg-white border border-gray-300 rounded-md px-2 py-1 outline-none focus:border-indigo-500 transition duration-300" onChange={handleDurationChange} value={testDuration}>
              <option value={10}>10s</option>
              <option value={30}>30s</option>
              <option value={60}>60s</option>
              <option value={90}>90s</option>
              <option value={120}>120s</option>
            </select>
            {testStarted ? (
              <button className="my-2 px-2 py-1 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center" onClick={endTest}>Stop</button>
            ) : (
              <button className="my-2 px-2 py-1 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center" onClick={startTest}>Start</button>
            )}
          </div>
        </>
      )}
    </nav>
  );
}

export default NavigationBar;
