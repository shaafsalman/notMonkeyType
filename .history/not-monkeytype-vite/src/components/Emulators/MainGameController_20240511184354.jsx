import React from 'react';
import Navbar from './Emulator_navbar'; 
import Display from './Display'; 

const MainGameContainer = ({ 
  testText,
  charClasses,
  userInput,
  onInput,
  testStarted,
  timeRemaining,
  wpm,
  accuracy
}) => {
  return (
    <div className="mainGameContainer">
      <Navbar />
      <Display 
        testText={testText} 
        charClasses={charClasses} 
        userInput={userInput} 
        onInput={onInput} 
        testStarted={testStarted} 
        timeRemaining={timeRemaining} 
        wpm={wpm} 
        accuracy={accuracy} 
      />
    </div>
  );
}

export default MainGameContainer;
