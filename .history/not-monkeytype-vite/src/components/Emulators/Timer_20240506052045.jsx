import React from 'react';

function Timer({ timeRemaining }) {
    return (
        <div className="stat">
         <h3>Time Remaining</h3>
           {timeRemaining}
        </div>
    );
}

export default Timer;