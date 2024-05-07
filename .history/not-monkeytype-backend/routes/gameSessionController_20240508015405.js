const express = require('express');
const router = express.Router();
const GameSession = require('../models/gameSession'); 

router.post('/game-sessions', async (req, res) => {
  try {
    const { textUsed, score, wpm, accuracy, sessionTime, userId } = req.body;

    const gameSession = new GameSession({
      textUsed,
      score,
      wpm,
      accuracy,
      sessionTime,
      userId,
    });

    await gameSession.save();

    res.status(201).json({ message: 'Game session saved successfully' });
  } catch (error) {
    console.error('Error saving game session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
