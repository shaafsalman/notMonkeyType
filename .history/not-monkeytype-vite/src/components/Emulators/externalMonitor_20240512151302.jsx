import React from 'react';
import TestArea from './TestArea';
import Keyboard from '../Spline/keyboard';

const ExternalMonitor = ({ testText, charClasses, onInput, userInput, inputRef, testStarted }) => {
  return (
    <div className="externalMonitor">
      <div className="keyBoardContainer"><Keyboard/></div>
      <div className="screen">
        <TestArea testText={testText} charClasses={charClasses} />
        <input
          type="text"
          onChange={onInput}
          value={userInput}
          ref={inputRef}
          disabled={!testStarted}
          style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
          autoFocus
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

export default ExternalMonitor;
