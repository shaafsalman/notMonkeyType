const express = require('express');
const router = express.Router();
const { GameSession, validateGameSession } = require('../models/gameSession');

router.post('/add', async (req, res) => {
  try {
    console.log('Request to add game session');
    const { textUsed, score, wpm, accuracy, sessionTime, userId } = req.body;

    const { error } = validateGameSession(req.body);
    if (error) return res.status(400).send(error.details[0].message);

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

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('Request to get game sessions for user ID:', userId);

    // Find user to get first name
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch game sessions for the user
    const gameSessions = await getGameSessionsByUserId(userId);

    // Prepare response data with user's first name and other game session details
    const responseData = gameSessions.map(session => ({
      firstName: user.firstName,
      date: session.createdAt,
      textLength: session.textUsed.length,
      wpm: session.wpm,
      accuracy: session.accuracy,
      score: session.score
    }));

    if (gameSessions.length === 0) {
      return res.status(404).json({ message: 'No game sessions found for this user' });
    }

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching game sessions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

  

module.exports = router;
