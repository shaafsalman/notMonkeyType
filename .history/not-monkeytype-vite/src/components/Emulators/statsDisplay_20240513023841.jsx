import React from 'react';
import Timer from './Timer';

const StatsDisplay = ({ wpm, accuracy, timeRemaining }) => {
  return (
    <div className="statsDisplay rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
      <div className="display">
        <div className="stats">
          <h1 className="tittleText text-xl font-bold mb-4">Stats</h1>
          <div className="stat border-b pb-2">
            <h3 className="font-semibold">WPM</h3>
            <p>{wpm}</p>
          </div>
          <div className="stat border-b pb-2">
            <h3 className="font-semibold">Accuracy</h3>
            <p>{accuracy}%</p>
          </div>
          <Timer timeRemaining={timeRemaining} />
        </div>
      </div>
    </div>
  );
}

export default StatsDisplay;
