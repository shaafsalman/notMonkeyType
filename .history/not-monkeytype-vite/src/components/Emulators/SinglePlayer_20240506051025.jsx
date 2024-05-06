import React, { useState, useEffect, useRef } from 'react';
import "./../style/emulator.css";
import TestArea from './TestArea';
import Timer from './Timer';
import Results from './Results';

const SinglePlayer = () => {
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [testDuration, setTestDuration] = useState(60);
    const [wpm, setWpm] = useState('-');
    const [accuracy, setAccuracy] = useState('-');
    const [testText] = useState("Betty decided to write a short story...");
    const [testStarted, setTestStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charClasses, setCharClasses] = useState(Array(testText.length).fill("default"));
    const [userInput, setUserInput] = useState("");
    const inputRef = useRef(null);

    const startTest = () => {
        setTestStarted(true);
        setTimeRemaining(testDuration);
        setUserInput("");
        setWpm("-");
        setAccuracy("-");
        setCurrentIndex(0);
        setCharClasses(Array(testText.length).fill("default"));
        inputRef.current.focus();
    };

    useEffect(() => {
        let timer;
        if (testStarted && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining(prev => prev - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            endTest();
        }
        return () => clearInterval(timer);
    }, [testStarted, timeRemaining]);

    const endTest = () => {
        setTestStarted(false);
        const typedChars = userInput.length;
        const correctChars = charClasses.filter(c => c === 'correct').length;

        const wordsPerMinute = (correctChars / 5) / (testDuration / 60);
        const accuracyPercentage = (correctChars / typedChars) * 100;

        setWpm(wordsPerMinute.toFixed(2));
        setAccuracy(accuracyPercentage.toFixed(2));
    };

    const handleDurationChange = (e) => {
        setTestDuration(parseInt(e.target.value));
    };
    const onInput = (e) => {
        if (!testStarted) return;
    
        const value = e.target.value;
    
        const newCharClasses = [...charClasses];
    
        if (value.length < userInput.length && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            newCharClasses[currentIndex - 1] = 'default';
        } else if (currentIndex < testText.length) {
            if (value[currentIndex] === testText[currentIndex]) {
                newCharClasses[currentIndex] = 'correct';
            } else {
                newCharClasses[currentIndex] = 'wrong';
            }
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    
        setUserInput(value);
        setCharClasses(newCharClasses);
    
        // Calculate typed characters
        const typedChars = value.length;
    
        // Calculate correct characters
        const correctChars = newCharClasses.filter((c) => c === 'correct').length;
    
        // Calculate words per minute
        const wordsPerMinute = (correctChars / 5) / (testDuration / 60);
    
        // Calculate accuracy percentage
        const accuracyPercentage = (correctChars / typedChars) * 100;
    
        // Update state with calculated values
        setWpm(wordsPerMinute.toFixed(2));
        setAccuracy(accuracyPercentage.toFixed(2));
    };
    return (
        <div className="mainGameContainer">
            <nav className="navbar">
                <button className="navBtn">Back</button>
                <h1 className="title">notMonkeyType</h1>
                <div className="mode">Mode: SinglePlayer</div>
                <select className="duration" onChange={handleDurationChange} value={testDuration}>
                    <option value={10}>10 seconds</option>
                    <option value={30}>30 seconds</option>
                    <option value={60}>60 seconds</option>
                    <option value={90}>90 seconds</option>
                    <option value={120}>120 seconds</option>
                </select>
                {testStarted ? (
                    <button className="navBtn" onClick={endTest}>Stop</button>
                ) : (
                    <button className="navBtn" onClick={startTest}>Start</button>
                )}
            </nav>
            <div className="display">
                <div className="stats">
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
                <div className="externalMonitor">
                    <div className="screen">
                        <TestArea testText={testText} charClasses={charClasses} />
                        <input
                            type="text"
                            onChange={onInput}
                            value={userInput}
                            ref={inputRef}
                            disabled={!testStarted}
                            autoFocus
                            tabIndex={-1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePlayer;
