import React from 'react';
import MultiPlayerForm from '../Spline/multiPlayerForm';

function MultiPlayer() {
  const joinRoom = () => {
    console.log('Join Room');
  };

  const createRoom = () => {
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
