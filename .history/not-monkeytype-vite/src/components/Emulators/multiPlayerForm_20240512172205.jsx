import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const MultiPlayerForm = ({ setFinalCode }) => {
  const [showInput, setShowInput] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [selfCode, setSelfCode] = useState('');


  const inputRef = useRef(null);

  const handleCreateClick = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
    setSelfCode(newCode);
    setShowInput(false);
  };

  const handleJoinClick = () => {
    setShowInput(!showInput);
    if (!showInput) {
      inputRef.current.focus(); 
    }
  };

  const handleRegenerateCode = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
    setSelfCode(newCode)
  };
  const handleEnterSelfCode = () => {
      setFinalCode(selfCode);
  };

  const handleEnterRoom = () => {
    if (showInput) {
      const enteredCode = inputRef.current.value;
      setFinalCode(enteredCode);
    }
  };

  const generateRandomCode = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  return (
  
  );
};

export default MultiPlayerForm;
