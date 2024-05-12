import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { jwtDecode } from "jwt-decode";
import Keyboard from '../Spline/keyboard';
import NavigationBar from './emulatorNavigationBar';
import ExternalMonitor from './externalMonitor';
import StatsDisplay from './statsDisplay';
import ScoreCard from './../Cards/scoreCard';
import MultiPlayerForm from "./multiPlayerForm";
import TimerCard from '../Cards/timerCard';
import Results from './../Cards/multiPlayerResult';
import baseURL from '../../../config';

// const socket = io('http://localhost:8080'); 
const socket = io(`http://${baseURL}`);

const MultiPlayer = () => {
  const [roomCode, setRoomCode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [testDuration, setTestDuration] = useState(30);
  const [wpm, setWpm] = useState('-');
  const [accuracy, setAccuracy] = useState('-');
  const [testText] = useState("Betty decided to write a short story...");
  const [userInput, setUserInput] = useState("");
  const [testStarted, setTestStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charClasses, setCharClasses] = useState(Array(testText.length).fill("default"));
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTimerCard, setShowTimerCard] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (roomCode) {
      // Establish socket connection and set up listeners
      const connectSocket = () => {
        socket.on('countdown', (number) => {
          setTestDuration(number);
          if (number === 1) {
            setTimeout(() => {
              setTestStarted(true);
              setTimeRemaining(30);
              setTestDuration(null);
            }, 1000);
          }
        });
  
        socket.on("score", (scoreData) => {
          console.log("Received score data:", scoreData);
          setScores(prevScores => [...prevScores, scoreData]);
        });
      };
  
      connectSocket(); 
  
      return () => {
        socket.off('countdown');
        socket.off('score');
      };
    }
  }, [roomCode]); 
  
  useEffect(() => {
    if (roomCode) {
      socket.emit('joinRoom', roomCode);
    }
    return () => {
      socket.off('connect');
    };
  }, [roomCode]);




  useEffect(() => {
    if (testStarted) {
      inputRef.current.focus();
    }
  }, [testStarted]);

  useEffect(() => {
    let timer;
    if (testStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && testStarted) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [testStarted, timeRemaining]);

  useEffect(() => {
    if (userInput.length === testText.length || timeRemaining === 0) {
      endTest();
    }
  }, [userInput, testText, timeRemaining, testStarted]);

  const startTest = () => {
    setTimeRemaining("");
    setShowTimerCard(true);
    socket.emit('startTest', roomCode);
    setTestStarted(true);
    setTimeRemaining(testDuration);
    setUserInput("");
    setWpm("-");
    setAccuracy("-");
    setCurrentIndex(0);
    setCharClasses(Array(testText.length).fill("default"));
    setShowScoreCard(false);
  };

  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded._id;
    const email = decoded.email;
    return { userId, email };
  };

  const endTest = () => {
    setTestStarted(false);
    const typedChars = userInput.length;
    const correctChars = charClasses.filter(c => c === 'correct').length;
    const wordsPerMinute = (correctChars / 5) / (0.5);
    const accuracyPercentage = (correctChars / typedChars) * 100;
    const score = Math.round((wordsPerMinute * 0.4) + (accuracyPercentage * 0.6));

    const token = localStorage.getItem('token');
    const { userId, email } = decodeToken(token);

    const userInfo = {
      wpm: wordsPerMinute.toFixed(2),
      accuracy: accuracyPercentage.toFixed(2),
      score: score,
      email: email,
      userId: userId
    };

    socket.emit('submitScore', { roomCode, score: userInfo });
    setShowResults(true);
  };

  const onInput = (e) => {
    if (!testStarted) return;

    const value = e.target.value;
    const newCharClasses = [...charClasses];

    if (value.length < userInput.length && currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      newCharClasses[currentIndex - 1] = 'default';
    } else if (currentIndex < testText.length) {
      if (value[currentIndex] === testText[currentIndex]) {
        newCharClasses[currentIndex] = 'correct';
      } else {
        newCharClasses[currentIndex] = 'wrong';
      }
      setCurrentIndex(prevIndex => prevIndex + 1);
    }

    setUserInput(value);
    setCharClasses(newCharClasses);
  };

  const handleDurationChange = (e) => {
    setTestDuration(parseInt(e.target.value));
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

  // Remaining JSX components...


  return (
    <div className="multiplayer-page">
      {!roomCode && <MultiPlayerForm setRoomCode={setRoomCode} />}
      {roomCode &&  <div className="emulator">
        <div className="keyBoardContainer"><Keyboard/></div>
        <div className="mainGameContainer">
          <NavigationBar
            isMobile={isMobile}
            handleDurationChange={handleDurationChange}
            testDuration={testDuration}
            testStarted={testStarted}
            startTest={startTest}
            endTest={endTest}
            mode="MultiPlayer"
            roomCode={roomCode}
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
          {showTimerCard && (
            <TimerCard
              duration={4} 
              onClose={() => setShowTimerCard(false)}
            />
          )}
        </div>
      </div>}
      {showResults && scores.length > 0 && ( 
        <Results scores={scores} />
      )}
    </div>
  );
};

export default MultiPlayer;
