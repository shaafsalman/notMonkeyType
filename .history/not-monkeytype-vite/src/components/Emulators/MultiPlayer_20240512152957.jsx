import React from 'react';
import MultiPlayerForm from '../Spline/multiPlayerForm';

function MultiPlayer() {
  const joinRoom = () => {
    // Handle join room logic
    console.log('Join Room');
  };

  const createRoom = () => {
    // Handle create room logic
    console.log('Create Room');
  };

  return (
    <div>
      <MultiPlayerForm
        joinRoom={joinRoom}
        createRoom={createRoom}
      />
    </div>
  );
}

export default MultiPlayer;
