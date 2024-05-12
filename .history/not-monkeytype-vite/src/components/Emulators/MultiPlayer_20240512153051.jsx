import React, { useState } from 'react';
import MultiPlayerForm from '../Spline/multiPlayerForm';

function MultiPlayer() {
  const [roomCode, setRoomCode] = useState('');

  const joinRoom = () => {
    // Handle join room logic
    console.log('Join Room');
  };

  const createRoom = () => {
    // Generate a random 3-digit code
    const randomCode = Math.floor(100 + Math.random() * 900);
    setRoomCode(randomCode.toString());
  };

  return (
    <div>
      <MultiPlayerForm
        joinRoom={joinRoom}
        createRoom={createRoom}
        roomCode={roomCode}
      />
    </div>
  );
}

export default MultiPlayer;
