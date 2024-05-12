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
  const [showEmulator, setShowEmulator] = useState(false);



  const startTest = () => {
    setTestStarted(true);
    setTimeRemaining(testDuration);
    setUserInput("");
    setWpm("-");
    setAccuracy("-");
    setCurrentIndex(0);
    setCharClasses(Array(testText.length).fill("default"));
    setShowScoreCard(false);
  };

  useEffect(() => {
    if (testStarted) {
      inputRef.current.focus();
    }
  }, [testStarted]);


  useEffect(() => {
    let timer;
    if (testStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, timeRemaining]);
  


  useEffect(() => {
    if (userInput.length === testText.length || timeRemaining === 0 || !testStarted) {
      endTest();
    }
  }, [userInput, testText, timeRemaining, testStarted]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { userId, email } = decodeToken(token);
        setEmail(email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);

  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded._id;
    const email = decoded.email;
    
    // console.log("User Here");
    // console.log(userId, email);
    return { userId, email };
  };

  
  const endTest = async () => { 
    setTestStarted(false);
    const typedChars = userInput.length;
    const correctChars = charClasses.filter(c => c === 'correct').length;
  
    // Calculating WPM
    const wordsTyped = typedChars / 5;
    const minutes = testDuration / 60;
    const wordsPerMinute = (wordsTyped / minutes).toFixed(2);
  
    // Calculating Accuracy
    const accuracyPercentage = ((correctChars / typedChars) * 100).toFixed(2);
  
    // Computing Score
    const newScore = Math.round((wordsPerMinute * 0.4) + (accuracyPercentage * 0.6));
    setScore(newScore);
  
    setWpm(wordsPerMinute);
    setAccuracy(accuracyPercentage);
    setShowScoreCard(true);
    setTimeRemaining(60);

  
    try {
      const token = localStorage.getItem('token');
      const { userId } = decodeToken(token);
      const { email } = decodeToken(token);

  
      await axios.post('http://localhost:8080/api/gameSession/add', {
        textUsed: testText,
        score: newScore,
        wpm: wordsPerMinute,
        accuracy: accuracyPercentage,
        sessionTime: testDuration,
        userId: userId,
        email: email

      });
  
      setShowScoreCard(true);
    } catch (error) {
      console.error('Error saving game session:', error);
    }
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
      {!finalCode && <MultiPlayerForm setFinalCode={setFinalCode} />}
      {showEmulator && (
        <div className="emulator">
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
