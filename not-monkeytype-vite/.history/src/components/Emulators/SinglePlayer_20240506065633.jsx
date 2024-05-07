import React, { useState, useEffect, useRef } from 'react';
import "./../style/emulator.css";
import TestArea from './TestArea'; 
import Timer from './Timer'; 
import Results from './Results'; 
import Keyboard from '../Spline/keyboard';

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

    const startTest = () => {
        setTestStarted(true);
        setTimeRemaining(testDuration);
        setUserInput("");
        setWpm("-");
        setAccuracy("-");
        setCurrentIndex(0);
        setCharClasses(Array(testText.length).fill("default"));
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
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

        // Check if the key was backspace
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

        // Calculate WPM and accuracy in real-time
        const typedChars = value.length;
        const correctChars = newCharClasses.filter(c => c === 'correct').length;

        const wordsPerMinute = (correctChars / 5) / (testDuration / 60);
        const accuracyPercentage = (correctChars / typedChars) * 100;

        setWpm(wordsPerMinute.toFixed(2));
        setAccuracy(accuracyPercentage.toFixed(2));
    };

    const handleDurationChange = (e) => {
        setTestDuration(parseInt(e.target.value));
    };

    return (
        <div className="singlePlayer">
            <div className="keyBoardContainer"><Keyboard/></div>

             <div className="mainGameContainer">
             <nav className="flex md:mx-40 mx-4 md:mt-5 mt-3 justify-between items-center px-6 md:px-10 py-2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white min-h-16 rounded-lg shadow-md transition duration-300">
            <button className="px-6 md:px-10 py-2 flex items-center justify-center h-10 w-24 text-base text-white bg-purple-700 rounded-lg border border-purple-700 transition duration-300 hover:bg-indigo-700">
                Back
            </button>
            <h1 className="text-lg md:text-2xl px-6 md:px-10 font-bold">notMonkeyType</h1>
            {!isExpanded && (
                <button className="px-6 md:px-10 py-2 flex items-center justify-center h-10 w-24 text-base text-white bg-purple-700 rounded-lg border border-purple-700 transition duration-300 hover:bg-indigo-700" onClick={toggleExpand}>
                    Expand
                </button>
            )}
            {isExpanded && (
                <>
                    <div className="mode text-base md:text-xl mr-6 md:mr-20">Mode: SinglePlayer</div>
                    <select className="px-4 py-2 ml-4 md:ml-10 text-base text-white bg-gray-800 rounded-lg border border-gray-800 focus:outline-none focus:border-indigo-500">
                        <option value={10}>10 seconds</option>
                        <option value={30}>30 seconds</option>
                        <option value={60}>60 seconds</option>
                        <option value={90}>90 seconds</option>
                        <option value={120}>120 seconds</option>
                    </select>
                    <button className="px-4 py-2 ml-4 md:ml-10 flex items-center justify-center h-10 w-24 text-base text-white bg-purple-700 rounded-lg border border-purple-700 transition duration-300 hover:bg-indigo-700" onClick={toggleExpand}>
                        Collapse
                    </button>
                </>
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
        </div>
   

     
    );
}

export default SinglePlayer;
