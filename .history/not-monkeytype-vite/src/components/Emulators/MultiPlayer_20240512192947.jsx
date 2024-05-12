import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Keyboard from '../Spline/keyboard';
import NavigationBar from './emulatorNavigationBar';
import ExternalMonitor from './externalMonitor';
import StatsDisplay from './statsDisplay';
import ScoreCard from './../Cards/scoreCard';
import MultiPlayerForm from "./multiPlayerForm";


const socket = io('http://localhost:8080'); 

const MultiPlayer = () => {
  const [roomCode, setRoomCode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [testDuration, setTestDuration] = useState(10);
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

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');

    });
    
    socket.on('startTest', () => {
      setUserInput("");
      setCurrentIndex(0);
      setCharClasses(Array(testText.length).fill("default"));
      setShowResults(false);
      setTestStarted(true);
  });

  
  

    socket.on('score', (scoreData) => {
            setScores(prevScores => [...prevScores, scoreData]);
            setShowResults(true);
        });
    
        return () => {
            socket.off('countdown');
            socket.off('startTest');
            socket.off('score');
        };
  }, []);


  useEffect(() => {
    if (roomCode) {
      // Connect the user to the socket with the room code
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
    if (testStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && testStarted) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [testStarted, timeRemaining]);



  const startTest = () => {
    setTestStarted(true);
    setTimeRemaining(testDuration);
    setUserInput("");
    setWpm("-");
    setAccuracy("-");
    setCurrentIndex(0);
    setCharClasses(Array(testText.length).fill("default"));
    setShowScoreCard(false);
    socket.emit('startTest', roomCode);
  };

  const endTest = () => {
    setTestStarted(false);
    const typedChars = userInput.length;
    const correctChars = charClasses.filter(c => c === 'correct').length;
    const wordsPerMinute = (correctChars / 5) / (0.5); 
    const accuracyPercentage = (correctChars / typedChars) * 100; 

    // Prepare the score object
    const newScore = Math.round((wordsPerMinute * 0.4) + (accuracyPercentage * 0.6));
    setScore(newScore);

    setWpm(wordsPerMinute.toFixed(2));
    setAccuracy(accuracyPercentage.toFixed(2));
    setShowScoreCard(true);
    setTimeRemaining(60); 
    socket.emit('submitScore', { roomCode, score: newScore });
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
            mode = "MultiPlayer"
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

           
        </div>
      </div>
}
  </div>
  );
};

export default MultiPlayer;