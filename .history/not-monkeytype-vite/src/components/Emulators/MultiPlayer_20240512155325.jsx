import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const MultiPlayerForm = ({ joinRoom, createRoom, roomCode }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEnterClick = () => {
    setShowInput(!showInput);
    setInputValue("");
  };

  const handleCreateClick = () => {
    createRoom();
    setShowInput(false); 
  };

  const handleSubmit = () => {
    if (showInput) {
      joinRoom(inputValue);
    } else {
      createRoom();
      setShowInput(true); 
    }
    setInputValue("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-3/5 flex rounded-lg overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105 h-60vh min-h-60vh">
        <div className="pr-10m x-10">
          <div className="w-1/2 px-11 py-40 mr-30">
            <h1 className="text-4xl font-bold text-white mb-4">MultiPlayer</h1>
            <div className="flex w-max">
              <button onClick={handleEnterClick} className="w-max px-8 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {showInput ? 'Cancel' : (roomCode ? 'Generate Room Code' : 'oin Room')}
              </button>
              <button onClick={handleCreateClick} className="w-max px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Join Room
              </button>
            </div>
            {roomCode && !showInput && (
              <p className="text-white mt-4">Room Code: {roomCode}</p>
            )}
            {showInput && (
              <div className="mt-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter Room ID"
                  className="w-max px-2 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-80 relative ml-40">
          <Spline
            className="absolute top-0 right-0 bottom-0 left-0"
            scene="https://prod.spline.design/wbGSEgtIeXYtBDkR/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiPlayerForm;
