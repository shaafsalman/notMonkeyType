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


router.get('/userId', async (req, res) => {

    try {
      console.log('requesting getting User Score');
      const userId = req.params.userId;
      const gameSessions = await GameSession.find({ userId });
      if (gameSessions.length === 0) {
        return res.status(404).json({ message: 'No game sessions found for this user' });
      }
      res.status(200).json(gameSessions);
    } catch (error) {
      console.error('Error fetching game sessions:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;
