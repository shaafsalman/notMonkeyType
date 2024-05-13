import React from 'react';
import { Link } from 'react-router-dom';
import ToggleComponent from './../Utility/toggler'; // Import the ToggleComponent
import { useState } from 'react';


const NavigationBar = ({ isMobile, handleDurationChange, testDuration, testStarted, startTest, endTest, mode, roomCode, setDifficultyLevel}) => {
  const [selectedValue, setSelectedValue] = useState("beginner");  
  
  const handleToggleChange = (value) => {
    setSelectedValue(value);
    setDifficultyLevel(value);
  };
  
  
  return (
    <nav className={`navbar ${isMobile ? 'flex flex-col items-center justify-center p-1' : 'flex justify-between items-center px-10 py-4'} bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg transition duration-300`}>
      {!isMobile && (
        <div className="div">
           <div className="flex">
         <div className="flex items-center">
          <Link to="/home" className="mx-2 my-2 px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
            Back to Menu
          </Link>
          <h1 className="mx-10 flex-grow text-xl md:text-2xl font-bold">notMonkeyType</h1>
         

            {mode == "SinglePlayer" &&
             <div className="div">
                <div className="flex items-center px-10">
            
               <div className="mode mr-4">
                  Mode: {mode}
                </div>
              </div>

             </div>
            }
            {mode == "MultiPlayer" &&
            <div className="flex items-center px-1">
            {roomCode&&  
            <div className="room-code mr-4">
              Room Code: {roomCode}
            </div>}
           
            <div className="mode mr-4">
              Mode: {mode}
            </div>
             </div>
            }
          
          <div className="duration-container">
            <select className="duration bg-white border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-indigo-500 transition duration-300 mr-4" onChange={handleDurationChange} value={testDuration}>
              <option value={10}>10 seconds</option>
              <option value={30}>30 seconds</option>
              <option value={60}>60 seconds</option>
              <option value={90}>90 seconds</option>
              <option value={120}>120 seconds</option>
            </select>
            {testStarted ? (
              <button className="mx-2 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300" onClick={endTest}>Stop</button>
            ) : (
              <button className="mx-2 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300" onClick={startTest}>Start</button>
            )}
          </div>
          
        </div>
       </div>
       {mode == "SinglePlayer" &&
         <div className=" justify-center mx-60">  
         <ToggleComponent selectedValue={selectedValue} onToggleChange={handleToggleChange} /> 
      </div>
         }
       
        
        </div>

      )}
      {isMobile && (
        <div className="flex flex-col items-center h-60 w-96">
          <Link to="/home" className="my-1 py-2 w-60 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
            Back
          </Link>
          <h1 className="title-text my-2 text-xl md:text-2xl">notMonkeyType</h1>
          {mode == "multiplayer" &&
           
           <div className="room-code mr-4">
            Room Code: {roomCode}
          </div>
           }
          <div className="flex items-center">
            <select className="duration bg-white border border-gray-300 rounded-md px-2 py-1 outline-none focus:border-indigo-500 transition duration-300 mr-4" onChange={handleDurationChange} value={testDuration}>
              <option value={10}>10s</option>
              <option value={30}>30s</option>
              <option value={60}>60s</option>
              <option value={90}>90s</option>
              <option value={120}>120s</option>
            </select>
            {testStarted ? (
              <button className="my-2 px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300" onClick={endTest}>Stop</button>
            ) : (
              <button className="my-2 px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300" onClick={startTest}>Start</button>
            )}
          </div>
          {mode == "SinglePlayer" &&
           <div className="flex flex-col ">
           <ToggleComponent selectedValue={selectedValue} onToggleChange={handleToggleChange} /> 
          </div>
           
           }
          
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
