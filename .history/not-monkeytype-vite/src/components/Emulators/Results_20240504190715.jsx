import React from 'react';

function Results({ wpm, accuracy }) {
    return (
        <div>
            <p>WPM: {wpm}</p>
            <p>Accuracy: {accuracy}</p>
        </div>
    );
}

export default Results;
