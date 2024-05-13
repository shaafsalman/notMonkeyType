const express = require("express");
const router = express.Router();
const multiGameSessionController = require("../Controllers/multiGameSessionController");

// Route to get multiplayer sessions by email
router.get("/api/multiGameSession/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const sessions = await multiGameSessionController.findByEmail(email);
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching multiplayer sessions", error: error.message });
  }
});

module.exports = router;
