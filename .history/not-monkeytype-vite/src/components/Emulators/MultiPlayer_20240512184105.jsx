import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import MultiPlayerForm from './multiPlayerForm';
import Keyboard from '../Spline/keyboard';
import NavigationBar from './emulatorNavigationBar';
import ExternalMonitor from './externalMonitor';
import StatsDisplay from './statsDisplay';
import ScoreCard from './../Cards/scoreCard'; 

const socket = io('http://localhost:3001'); 

const MultiPlayer = () => {
  const [finalCode, setFinalCode] = useState('');
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

    return () => {
      socket.disconnect();
    };
  }, []);

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
    socket.emit('startTest', finalCode);
  };

  const endTest = () => {
    setTestStarted(false);
    const typedChars = userInput.length;
    const correctChars = charClasses.filter(c => c === 'correct').length;
    const wordsPerMinute = (correctChars / 5) / (0.5); // Calculate WPM
    const accuracyPercentage = (correctChars / typedChars) * 100; // Calculate accuracy

    // Prepare the score object
    const newScore = Math.round((wordsPerMinute * 0.4) + (accuracyPercentage * 0.6));
    setScore(newScore);

    setWpm(wordsPerMinute.toFixed(2));
    setAccuracy(accuracyPercentage.toFixed(2));
    setShowScoreCard(true);
    setTimeRemaining(60); // Reset timer for next round
    socket.emit('submitScore', { finalCode, score: newScore });
  };

  const onInput = (e) => {
    if (!testStarted) return;

    const value = e.target.value;
    setUserInput(value);
    const newCharClasses = [...charClasses];
    if (value.length < userInput.length) {
      setCurrentIndex(currentIndex - 1);
      newCharClasses[currentIndex - 1] = 'default';
    } else {
      const newIndex = value.length - 1;
      newCharClasses[newIndex] = value[newIndex] === testText[newIndex] ? 'correct' : 'wrong';
      setCurrentIndex(newIndex);
    }
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
      {finalCode && (
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
              mode="MultiPlayer"
              finalCode={finalCode}
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