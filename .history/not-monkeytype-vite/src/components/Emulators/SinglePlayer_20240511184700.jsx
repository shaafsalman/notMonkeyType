import React, { useState, useEffect, useRef } from 'react';
import "./../style/emulator.css";
import TestArea from './TestArea'; 
import Timer from './Timer'; 
import { Link } from 'react-router-dom';
import Keyboard from '../Spline/keyboard';
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

  return (
    <div className="singlePlayer">
      <div className="keyBoardContainer"><Keyboard/></div>

      <div className="mainGameContainer">
      <nav className="navbar flex justify-end items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg transition duration-300">
  <Link to="/home" className="mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
    Back to Menu
  </Link>
  <h1 className="tittleText">notMonkeyType</h1>
  <div className="mode ml-auto">
    Mode: SinglePlayer
  </div>
  <div className="duration-container ml-20">
    <select className="duration bg-white border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-indigo-500 transition duration-300" onChange={handleDurationChange} value={testDuration}>
      <option value={10}>10 seconds</option>
      <option value={30}>30 seconds</option>
      <option value={60}>60 seconds</option>
      <option value={90}>90 seconds</option>
      <option value={120}>120 seconds</option>
    </select>
 
  </div>
  {testStarted ? (
    <button className="navBtn ml-6" onClick={endTest}>Stop</button>
  ) : (
    <button className="navBtn ml-6" onClick={startTest}>Start</button>
  )}
</nav>

     


        <div className="externalMonitor">
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

      {showScoreCard && (
        <ScoreCard
          wpm={wpm}
          time={testDuration}
          accuracy={accuracy}
          score={score} // Passing score to ScoreCard
          onClose={() => setShowScoreCard(false)}
        />
      )}
    </div>
  );
}

export default SinglePlayer;