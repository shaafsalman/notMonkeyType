import React, { useState } from 'react';
import MultiPlayerForm from './multiPlayerForm';
import TestArea from './TestArea'; 
import Timer from './Timer'; 
import { Link } from 'react-router-dom';
import Keyboard from '../Spline/keyboard';
import ScoreCard from './../Cards/scoreCard'; 
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import NavigationBar from './emulatorNavigationBar';
import ExternalMonitor from './externalMonitor';
import StatsDisplay from './statsDisplay';



const MultiPlayer = () => {
  const [roomCode, setRoomCode] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleJoinRoom = (code) => {
    setRoomCode(code);
    setShowInput(false);
  };

  const handleGenerateRoom = () => {
    const newCode = generateRandomCode();
    setRoomCode(newCode);
    setShowInput(true);
  };

  const generateRandomCode = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  const handleClose = () => {
    setShowInput(false);
  };

  return (
    <div className="multiplayer-page">
      <h1>Multiplayer Typing Test</h1>
      <MultiPlayerForm
        handleJoinRoom={handleJoinRoom}
        handleGenerateRoom={handleGenerateRoom}
        handleClose={handleClose}
        roomCode={roomCode}
        showInput={showInput}
      />
      {roomCode && (
        <div className="game-container">
          <div className="keyBoardContainer"><Keyboard/></div>
          <div className="mainGameContainer">
            <NavigationBar
              isMobile={isMobile}
              handleDurationChange={handleDurationChange}
              testDuration={testDuration}
              testStarted={testStarted}
              startTest={startTest}
              endTest={endTest}
            />
            <ExternalMonitor
              testText={testText}
              charClasses={charClasses}
              onInput={onInput}
              userInput={userInput}
              inputRef={inputRef}
              testStarted={testStarted}
            />
            <StatsDisplay
              wpm={wpm}
              accuracy={accuracy}
              timeRemaining={timeRemaining}
            />
            {showScoreCard && (
              <ScoreCard
                wpm={wpm}
                time={testDuration}
                accuracy={accuracy}
                score={score}
                onClose={() => setShowScoreCard(false)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiPlayer;
