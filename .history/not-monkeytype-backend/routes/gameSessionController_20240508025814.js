const express = require('express');
const router = express.Router();
const { GameSession, validateGameSession } = require('../models/gameSession');

router.post('/add', async (req, res) => {
  try {
    console.log('Request to add game session');
    const { textUsed, score, wpm, accuracy, sessionTime, userId } = req.body;

    // Validate the request body
    const { error } = validateGameSession(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Create a new game session instance
    const gameSession = new GameSession({
      textUsed,
      score,
      wpm,
      accuracy,
      sessionTime,
      userId,
    });

    // Save the game session to the database
    await gameSession.save();

    res.status(201).json({ message: 'Game session saved successfully' });
  } catch (error) {
    console.error('Error saving game session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



  

module.exports = router;
