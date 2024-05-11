import React from 'react';
import Spline from '@splinetool/react-spline';

const TVA = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-8/10 max-w-lg flex rounded-lg overflow-hidden bg-white bg-opacity-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 shadow-lg h-60vh min-h-70vh">
        <div className="w-1/2 px-20 py-40 mr-30">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 ">MultiPlayer</h1>
          <input
            type="text"
            placeholder="Enter Room ID"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <div className="flex">
            <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600">Join Room</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Create Room</button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <Spline
            className="absolute top-0 right-0 bottom-0 left-0"
            scene="https://prod.spline.design/wbGSEgtIeXYtBDkR/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
};

export default TVA;
