import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const MultiPlayerForm = ({ joinRoom, createRoom, roomCode }) => {
  const [showInput, setShowInput] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleCreateClick = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
    createRoom();
    setShowInput(false);
  };

  const handleJoinClick = () => {
    setShowInput(!showInput);
  };

  const handleEnterRoom = () => {
    setShowInput(false);
    joinRoom();
  };

  const handleRegenerateCode = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
  };

  const generateRandomCode = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-3/5 flex rounded-lg overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105 h-60vh min-h-60vh">
        <div className="pr-10m x-10">
          <div className="w-1/2 px-11 py-40 mr-30">
            <h1 className="text-4xl font-bold text-white mb-4">MultiPlayer</h1>
            <div className="flex w-max ">
              <button onClick={handleCreateClick} className="w-max px-4 py-2 mr-10 mb-10  bg-indigo-800 hover:bg-indigo-900 text-white rounded ">
                Create Room
              </button>
              <button onClick={handleJoinClick} className="w-max px-4 py-2 mb-10  bg-indigo-800 hover:bg-indigo-900 text-white rounded ">
                Join Room
              </button>
            </div>
            {generatedCode && !showInput && (
              <div className='flex w-max'>
                <p className="text-white text-xl mb-10 ">Room Code: {generatedCode}</p>
                <button onClick={handleRegenerateCode} className="w-max px-4 py-2  bg-indigo-800 hover:bg-indigo-900 text-white rounded ">
                  Regenerate Code
                </button>
              </div>
            )}
            {showInput && (
              <div>
                <input
                  type="text"
                  placeholder="Enter Room ID"
                  className="w-max px-2 py-2 mb-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleEnterRoom} className="w-max px-4 py-2  bg-indigo-800 hover:bg-indigo-900  text-white rounded ">
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
