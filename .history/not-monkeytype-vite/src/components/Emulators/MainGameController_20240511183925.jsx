import React from 'react';
import Keyboard from '../Spline/keyboard';
import TestArea from './TestArea';
import Timer from './Timer';

const MainGameContainer = ({ testText, charClasses, userInput, onInput, testStarted, timeRemaining, wpm, accuracy }) => {
  return (
    <div className="mainGameContainer">
      <Navbar />
      <div className="externalMonitor">
        <div className="screen">
          <TestArea testText={testText} charClasses={charClasses} />
          <input
            type="text"
            onChange={onInput}
            value={userInput}
            disabled={!testStarted}
            style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
            autoFocus
            tabIndex={-1}
          />
        </div>
      </div>
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
          <Timer timeRemaining={timeRemaining} />
        </div>
      </div>
    </div>
  );
}

export default MainGameContainer;
