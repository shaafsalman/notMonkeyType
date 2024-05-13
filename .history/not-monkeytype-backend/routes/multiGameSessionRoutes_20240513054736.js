const express = require("express");
const router = express.Router();
const multiGameSessionController = require("../Controllers/multiGameSessionController");



router.get("/:email", async (req, res) => {
    const { email } = req.params;
    console.log("Request to get multiplayer game sessions for user with email:", email);
  
    try {
      const sessions = await multiGameSessionController.findByEmail(email);
      
      router.get("/:email", async (req, res) => {
        const { email } = req.params;
        console.log("Request to get multiplayer game sessions for user with email:", email);
      
        try {
          const sessions = await multiGameSessionController.findByEmail(email);
          console.log("All details of sessions:", sessions); 
          res.json(sessions);
        } catch (error) {
          res.status(500).json({ message: "Error fetching multiplayer sessions", error: error.message });
        }
      });
      
      console.log("All details of sessions:", formattedSessions);
      res.json(formattedSessions);
    } catch (error) {
      res.status(500).json({ message: "Error fetching multiplayer sessions", error: error.message });
    }
  });
  

module.exports = router;
