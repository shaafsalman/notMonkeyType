import React from 'react';
import Timer from './Timer';

const StatsDisplay = ({ wpm, accuracy, timeRemaining,finalCode }) => {
  return (
    <div className="statsDisplay">
      <div className="display">
        <div className="stats">
          <h1 className="tittleText">Stats</h1>
          <div className="stat">
            <h3>WPM</h3>
            <p>{wpm}</p>
          </div>
          <div className="stat">
            <h3>Accuracy</h3>
            <p>{accuracy}%</p>
          </div>
          <div className="stat">
            <h3>Accuracy</h3>
            <p>{accuracy}%</p>
          </div>
          <Timer timeRemaining={timeRemaining} />
        </div>
      </div>
    </div>
  );
}

export default StatsDisplay;
