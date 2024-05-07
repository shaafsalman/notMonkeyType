import React from 'react';


const ScoreCard = ({ wpm, time, accuracy, score, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full flex justify-center items-start z-50">
        <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 mt-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="text-white text-3xl sm:text-3xl font-bold mb-6">Result</div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-white text-lg font-bold">WPM:</span>
                <span className="text-white text-lg">{wpm}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-lg font-bold">Time:</span>
                <span className="text-white text-lg">{time} seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-lg font-bold">Accuracy:</span>
                <span className="text-white text-lg">{accuracy}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-lg font-bold">Score:</span>
                <span className="text-white text-lg">{score}</span>
              </div>
            </div>
          </div>
          <button className="absolute top-0 right-0 mr-4 mt-2 text-white font-bold text-xl outline-none focus:outline-none" onClick={onClose}>×</button>
        </div>
      </div>
    );
  };
  
  export default ScoreCard;
