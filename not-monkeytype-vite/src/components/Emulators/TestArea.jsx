import React from 'react';

function TestArea({ testText, charClasses }) {
    return (
        <div className="word-container">
            {testText.split("").map((char, index) => (
                <span key={index} className={charClasses[index]}>{char}</span>
            ))}
        </div>
    );
}

export default TestArea;
