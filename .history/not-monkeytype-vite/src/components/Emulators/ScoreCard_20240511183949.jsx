import React from 'react';
import ScoreCard from './../Cards/scoreCard';

const ScoreCard = ({ wpm, testDuration, accuracy, score, onClose }) => {
  return (
    <ScoreCard
      wpm={wpm}
      time={testDuration}
      accuracy={accuracy}
      score={score} // Passing score to ScoreCard
      onClose={onClose}
    />
  );
}

export default ScoreCard;
