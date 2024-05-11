import React, { useState, useEffect, useRef } from 'react';
import "./../style/emulator.css";
import Keyboard from '../Spline/keyboard';
import Navbar from './Emulator_navbar';
import MainGameContainer from './MainGameController';
import ScoreCard from './../Cards/scoreCard'; 
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const SinglePlayer = () => {
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
    
    return { userId, email };
  };

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

  const endTest = async () => { 
    setTestStarted(false);
    const typedChars = userInput.length;
    const correctChars = charClasses.filter(c => c === 'correct').length;
  
    const wordsTyped = typedChars / 5;
    const minutes = testDuration / 60;
    const wordsPerMinute = (wordsTyped / minutes).toFixed(2);
  
    const accuracyPercentage = ((correctChars / typedChars) * 100).toFixed(2);
  
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

  return (
    <div className="singlePlayer">
      <div className="keyBoardContainer"><Keyboard/></div>
      <MainGameContainer
        testText={testText}
        charClasses={charClasses}
        userInput={userInput}
        onInput={onInput}
        testStarted={testStarted}
        timeRemaining={timeRemaining}
        wpm={wpm}
        accuracy={accuracy}
      />
      {showScoreCard && (
        <ScoreCard
          wpm={wpm}
          testDuration={testDuration}
          accuracy={accuracy}
          score={score}
          onClose={() => setShowScoreCard(false)}
        />
      )}
    </div>
  );
}

export default SinglePlayer;
