const express = require("express");
const router = express.Router();
const multiGameSessionController = require("../Controllers/multiGameSessionController");



router.get("//multiGameSession/:email", async (req, res) => {
  const { email } = req.params;
  console.log("Request to get multiplayer game sessions for user with email:", email);

  try {
    const sessions = await multiGameSessionController.findByEmail(email);
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching multiplayer sessions", error: error.message });
  }
});

module.exports = router;
