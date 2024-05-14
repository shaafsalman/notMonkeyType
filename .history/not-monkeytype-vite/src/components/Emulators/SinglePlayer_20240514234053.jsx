import React, { useState, useEffect, useRef } from 'react';
import "./../style/emulator.css";
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
import baseURL from '../../../config';
import GenreDescription from './../Utility/paragraphGenerator';


const SinglePlayer = () => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [testDuration, setTestDuration] = useState(10);
  const [wpm, setWpm] = useState('-');
  const [accuracy, setAccuracy] = useState('-');
  const [testText,setTestText] = useState("Betty decided to write a short story Betty decided to write a short story Betty decided to write a short story Betty decided to write a short story");
  const [userInput, setUserInput] = useState("");
  const [testStarted, setTestStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charClasses, setCharClasses] = useState(Array(testText.length).fill("default"));
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState("beginner"); 


  const calculateWPM = (typedChars, duration) => {
    const wordsTyped = typedChars / 5;
    const minutes = duration / 60;
    return (wordsTyped / minutes).toFixed(2)* 3;
  };

  const calculateAccuracy = (correctChars, typedChars) => {
    return ((correctChars / typedChars) * 100).toFixed(2);
  };
  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded._id;
    const email = decoded.email;
    
    // console.log("User Here");
    // console.log(userId, email);
    return { userId, email };
  };

  useEffect(() => {
    const fetchParagraph = async () => {
      try {
        const paragraph = await GenreDescription(difficultyLevel);
        setTestText(paragraph);
        setCharClasses(Array(paragraph.length).fill("default"));
      } catch (error) 
      {
        console.error('Error fetching paragraph:', error);
      }
    };

    fetchParagraph();
    
  }, [difficultyLevel]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const startTest = () => {
    setTestStarted(true);
    setTimeRemaining(testDuration);
    setUserInput("");
    setWpm('-');
    setAccuracy('-');
    setCurrentIndex(0);
    setCharClasses(Array(testText.length).fill("default"));
    setShowScoreCard(false);
  };
  const endTest = async () => {
    setTestStarted(false);
    const typedChars = userInput.length;
    const correctChars = charClasses.filter(c => c === 'correct').length;

    // Calculating WPM and accuracy
    const newWPM = calculateWPM(typedChars, testDuration);
    const newAccuracy = calculateAccuracy(correctChars, typedChars);

    // Computing Score
    const newScore = Math.round((newWPM * 0.4) + (newAccuracy * 0.6));
    setScore(newScore);

    setShowScoreCard(true);
    setTimeRemaining(60);


    try {
      const token = localStorage.getItem('token');
      const { userId } = decodeToken(token);
      const { email } = decodeToken(token);

      await axios.post(`http://${baseURL}/api/gameSession/add`, 
      {
        textUsed: testText,
        score: newScore,
        wpm: newWPM,
        accuracy: newAccuracy,
        sessionTime: testDuration,
        userId: userId,
        email: email
      });

      setShowScoreCard(true);
      
    } catch (error) {
      console.error('Error saving game session:', error);
    }
  };

  const handleDurationChange = (e) => {
    setTestDuration(parseInt(e.target.value));
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

    // Calculate WPM and accuracy
    const typedChars = value.length;
    const correctChars = newCharClasses.filter(c => c === 'correct').length;
    setWpm(calculateWPM(typedChars, testDuration));
    setAccuracy(calculateAccuracy(correctChars, typedChars));
  };


////////////////////////////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
    if (testStarted) {
      inputRef.current.focus();
    }
  }, [testStarted]);
///////////////////////////////////////////
  useEffect(() => {
    let timer;
    if (testStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, timeRemaining]);
///////////////////////////////////////////
  useEffect(() => {
    if (userInput.length === testText.length || timeRemaining === 0) {
      endTest();
    }
  }, [userInput, testText, timeRemaining, testStarted]);
///////////////////////////////////////////
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
////////////////////////////////////////////





  

  return (
    <div className="singlePlayer">
      <div className="keyBoardContainer"><Keyboard /></div>
      <div className="mainGameContainer">
        <NavigationBar
          isMobile={isMobile}
          handleDurationChange={handleDurationChange}
          testDuration={testDuration}
          testStarted={testStarted}
          startTest={startTest}
          endTest={endTest}
          mode="SinglePlayer"
          setDifficultyLevel = {setDifficultyLevel}
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
  );
}

export default SinglePlayer;
