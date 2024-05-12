import React, { useState } from 'react';
import MultiPlayerForm from '../Spline/multiPlayerForm';

function MultiPlayer() {
  const [roomCode, setRoomCode] = useState('');
  const [showInput, setShowInput] = useState(false);

  const joinRoom = () => {
    setShowInput(!showInput);
  };

  const createRoom = () => {
    const newCode = generateRandomCode();
    setRoomCode(newCode);
    setShowInput(false);
  };

  const handleSubmit = () => {
    console.log('Submit');
  };

  const handleClose = () => {
    setShowInput(false);
  };

  const generateRandomCode = () => {
    return Math.floor(100 + Math.random() * 900).toString(); // Generate a random 3-digit code
  };

  return (
    <div>
      <MultiPlayerForm
        joinRoom={joinRoom}
        createRoom={createRoom}
        roomCode={roomCode}
        showInput={showInput}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      />
    </div>
  );
}

export default MultiPlayer;
