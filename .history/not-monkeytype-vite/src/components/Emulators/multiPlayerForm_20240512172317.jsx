import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const MultiPlayerForm = ({ setFinalCode }) => {
  const [showInput, setShowInput] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [selfCode, setSelfCode] = useState('');


  const inputRef = useRef(null);

  const handleCreateClick = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
    setSelfCode(newCode);
    setShowInput(false);
  };

  const handleJoinClick = () => {
    setShowInput(!showInput);
    if (!showInput) {
      inputRef.current.focus(); 
    }
  };

  const handleRegenerateCode = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
    setSelfCode(newCode)
  };
  const handleEnterSelfCode = () => {
      setFinalCode(selfCode);
  };

  const handleEnterRoom = () => {
    if (showInput) {
      const enteredCode = inputRef.current.value;
      setFinalCode(enteredCode);
    }
  };

  const generateRandomCode = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  return (
    <div className="multiplayerForm z-50">
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-3/5 flex rounded-lg overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105 h-60vh min-h-60vh">
        <div className="">
          <div className="w-1/2 px-8 py-40 mr-30">
            <h1 className="text-5xl font-bold text-white mb-4">MultiPlayer</h1>
            <div className="flex w-max">
              <button onClick={handleCreateClick} className="w-max px-4 py-2 mr-10 mb-10 bg-indigo-800 hover:bg-indigo-900 text-white rounded">
                Create Room
              </button>
              <button onClick={handleJoinClick} className="w-max px-4 py-2 mb-10 bg-indigo-800 hover:bg-indigo-900 text-white rounded">
                Join Room
              </button>
            </div>
            {generatedCode && !showInput && (
              <div>
                <p className="text-white text-3xl font-bold mb-10 w-max">Room Code: {generatedCode}</p>
                <div className="flex-auto w-max">
                  <button onClick={handleRegenerateCode} className="w-max px-4 py-2 mx-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded">
                    Regenerate Code
                  </button>
                  <button onClick={handleEnterSelfCode} className="w-max px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded">
                    Enter Room
                  </button>
                </div>
              </div>
            )}
            {showInput && (
              <div>
                <input
                  ref={inputRef}
                  type="number"
                  placeholder="Enter Room ID"
                  className="w-max px-2 py-2 mb-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleEnterRoom} className="w-max px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded">
                  Enter Room
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
    </div>
  
  );
};

export default MultiPlayerForm;
