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



const socket = io('http://192.168.204.237:8080'); 


const MultiPlayer = () => {
  const [roomCode, setRoomCode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [testDuration, setTestDuration] = useState(30);
  const [wpm, setWpm] = useState('-');
  const [accuracy, setAccuracy] = useState('-');
  const [testText] = useState("the marvel cinematic universe is an american media franchise and shared universe centered on a series of superhero films produced by marvel studios. The mcu has revolutionized modern cinema becoming a cultural phenomenona");
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
          setShowResults(true);
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
  }, [roomCode]);

  useEffect(() => {
    if (testStarted) {
      inputRef.current.focus();
    }
  }, [testStarted]);

  useEffect(() => {
    let timer;
    
    if (timeRemaining == "30" ||  timeRemaining == 30) 
      {   
        setUserInput("");
        setCurrentIndex(0);
        setCharClasses(Array(testText.length).fill("default"));
      }
    if (testStarted && timeRemaining > 0)
       {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && testStarted) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [testStarted, timeRemaining]);



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
    var wordsPerMinute = (correctChars / 5) / (0.5); 
    var accuracyPercentage = (correctChars / typedChars) * 100; 
    var score = Math.round((wordsPerMinute * 0.4) + (accuracyPercentage * 0.6));
    
    const token = localStorage.getItem('token');
    const { userId, email } = decodeToken(token);

  if (isNaN(wordsPerMinute) || wordsPerMinute === 0) {
    wordsPerMinute = 22;
  }

  // Check if accuracyPercentage is NaN, then set it to a default value of 10
  if (isNaN(accuracyPercentage)) {
    accuracyPercentage = 85;
  }

  // Check if score is null, then set it to a default value of 10
  if (score === null) {
    score = 60;
  }

  // Check if score is NaN, then set it to a default value of 10
  if (isNaN(score)) {
    score = 60;
  }

  const userInfo = {
    wpm: wordsPerMinute,
    accuracy: accuracyPercentage,
    score: score,
    email: email,
    userId: userId
  };
  
    socket.emit('submitScore', { roomCode, score: userInfo });
    setTestDuration("");
    setTimeRemaining("");
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

    const typedChars = value.length;
        const correctChars = newCharClasses.filter(c => c === 'correct').length;
        setWpm(calculateWPM(typedChars, 30));
        setAccuracy(calculateAccuracy(correctChars, typedChars));
  };

  const handleDurationChange = (e) => {
    setTestDuration(parseInt(e.target.value));
  };

  const calculateWPM = (typedChars, duration) => {
    const wordsTyped = typedChars / 5;
    const minutes = duration / 60;
    return (wordsTyped / minutes).toFixed(2) * 5;
  };

  const calculateAccuracy = (correctChars, typedChars) => {
    return ((correctChars / typedChars) * 100).toFixed(2);
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
    <Results scores={scores} onClose={() => setShowResults(false)} />
)}
    </div>
  );
};

export default MultiPlayer;