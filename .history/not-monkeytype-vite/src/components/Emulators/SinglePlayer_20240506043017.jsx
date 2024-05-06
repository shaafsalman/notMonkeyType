import React, { useState, useEffect, useRef } from 'react';
import "./../style/emulator.css"

const SinglePlayer = () => {
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [testDuration, setTestDuration] = useState(60);
    const [wpm, setWpm] = useState('-');
    const [accuracy, setAccuracy] = useState('-');
    const [testText] = useState("Betty decided to write a short story...");
    const [userInput, setUserInput] = useState("");
    const [testStarted, setTestStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charClasses, setCharClasses] = useState(Array(testText.length).fill("default"));
    const inputRef = useRef(null);

    function TestArea({ testText, charClasses }) {
        return (
            <div className="word-container">
                {testText.split("").map((char, index) => (
                    <span key={index} className={charClasses[index]}>{char}</span>
                ))}
            </div>
        );
        function Results({ wpm, accuracy }) {
            return (
                <div>
                    <p>WPM: {wpm}</p>
                    <p>Accuracy: {accuracy}</p>
                </div>
            );
        }


    const startTest = () => {
        setTestStarted(true);
        setTimeRemaining(testDuration);
        setUserInput("");
        setWpm("-");
        setAccuracy("-");
        setCurrentIndex(0);
        setCharClasses(Array(testText.length).fill("default"));
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
    function Timer({ timeRemaining }) {
        return <div id="timer">{timeRemaining}</div>;
    }
    
    

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
                <button className="navBtn" onClick={startTest}>Start</button>
            </nav>
            <div className="display">
                <Timer timeRemaining={timeRemaining} />
                <div className="externalMonitor">
                    <div className="screen">
                        {testText}
                    </div>
                </div>
                <input
                    type="text"
                    onChange={onInput}
                    value={userInput}
                    ref={inputRef}
                    disabled={!testStarted}
                    // style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
                    autoFocus
                    tabIndex={-1}
                />
            </div>
            <Results wpm={wpm} accuracy={accuracy} />
        </div>
    );
}

export default SinglePlayer;
