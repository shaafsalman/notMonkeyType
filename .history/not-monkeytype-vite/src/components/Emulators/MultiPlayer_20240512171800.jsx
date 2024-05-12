import React, { useState, useEffect, useRef } from 'react';
import MultiPlayerForm from './multiPlayerForm';
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
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [testDuration, setTestDuration] = useState(10);
  const [wpm, setWpm] = useState('-');
  const [accuracy, setAccuracy] = useState('-');
  const [testText] = useState("Betty decided to write a short story Betty decided to write a short story Betty decided to write a short story Betty decided to write a short story");
  const [userInput, setUserInput] = useState("");
  const [testStarted, setTestStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charClasses, setCharClasses] = useState(Array(testText.length).fill("default"));
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [finalCode, setFinalCode] = useState('');

  const handleJoinRoom = (code) => {
    setRoomCode(code);
    setShowInput(false);
  };

  const handleGenerateRoom = () => {
    const newCode = generateRandomCode();
    setRoomCode(newCode);
    setShowInput(true);
  };

  const handleClose = () => {
    setShowInput(false);
  };

  const generateRandomCode = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="multiplayer-page">
      {finalCode ? null : (
        <MultiPlayerForm
          handleJoinRoom={handleJoinRoom}
          handleGenerateRoom={handleGenerateRoom}
          handleClose={handleClose}
          roomCode={roomCode}
          setFinalCode={setFinalCode}
        />
      )}
      {roomCode && !finalCode && (
       <div className="multiPlayer">
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
