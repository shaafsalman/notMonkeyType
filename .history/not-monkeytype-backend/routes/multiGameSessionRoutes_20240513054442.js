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
          console.log("Fetched sessions:", sessions);
          
          const formattedSessions = sessions.map(session => ({
            _id: session._id,
            roomCode: session.roomCode,
            scores: session.scores.map(score => ({
              wpm: score.wpm,
              accuracy: score.accuracy,
              score: score.score,
              email: score.email,
              userId: score.userId,
              createdAt: score.createdAt,
              updatedAt: score.updatedAt
            })),
            createdAt: session.createdAt,
            updatedAt: session.updatedAt,
            __v: session.__v
          }));
          
          console.log("Formatted sessions:", formattedSessions);
          res.json(formattedSessions);
        } catch (error) {
          console.error("Error fetching multiplayer sessions:", error);
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
