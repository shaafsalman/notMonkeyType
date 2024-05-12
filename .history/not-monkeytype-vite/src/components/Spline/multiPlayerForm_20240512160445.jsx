import React from 'react';

const MultiPlayerForm = ({ joinRoom, createRoom, roomCode, showInput, handleSubmit, handleClose }) => {
  return (
    <div>
      {showInput && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-3/5 flex rounded-lg overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105 h-60vh min-h-60vh">
            <div className="pr-10m x-10">
              <div className="w-1/2 px-11 py-40 mr-30">
                <h1 className="text-4xl font-bold text-white mb-4">MultiPlayer</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Room ID"
                    className="w-max px-2 py-2 mb-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                  </button>
                  <button onClick={handleClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showInput && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-3/5 flex rounded-lg overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105 h-60vh min-h-60vh">
            <div className="pr-10m x-10">
              <div className="w-1/2 px-11 py-40 mr-30">
                <h1 className="text-4xl font-bold text-white mb-4">MultiPlayer</h1>
                <div className="flex w-max">
                  <button onClick={createRoom} className="w-max px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {roomCode ? 'Generate Room Code' : 'Create Room'}
                  </button>
                  <button onClick={joinRoom} className="w-max px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Join Room
                  </button>
                </div>
                {roomCode && (
                  <p className="text-white mt-4">Room Code: {roomCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiPlayerForm;
