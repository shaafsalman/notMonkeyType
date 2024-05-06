import React from 'react';

function Timer({ timeRemaining }) {
    return (
        <div className="stat">
         <h3>Time Remaining</h3>
          <p> {timeRemaining}</p>
        </div>
    );
}

export default Timer;