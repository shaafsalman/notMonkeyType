import React from 'react';

function Results({ wpm, accuracy }) {
    return (
        <div>
            <p>WPM: {wpm}</p>
            <p>Accuracy: {accuracy}</p>
        </div>
    );
}

function TestArea({ testText, charClasses }) {
    return (
        <div className="word-container">
            {testText.split("").map((char, index) => (
                <span key={index} className={charClasses[index]}>{char}</span>
            ))}
        </div>
    );
}

function Timer({ timeRemaining }) {
    return <div id="timer">{timeRemaining}</div>;
}

export { Results, TestArea, Timer };
