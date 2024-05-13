const express = require("express");
const router = express.Router();
const multiGameSessionController = require("../Controllers/multiGameSessionController");

router.get("/:email", async (req, res) => {
    const { email } = req.params;
    console.log("Request to get multiplayer game sessions for user with email:", email);

    try {
        const sessions = await multiGameSessionController.findByEmail(email);

        // Extract player details
        const player1 = sessions[0].scores.find(score => score.email === email);

        // Format the output
        const formattedSessions = {
            player1: {
                email: player1.email,
                wpm: player1.wpm,
                accuracy: player1.accuracy,
                score: player1.score
            },
            player2: {
                email: player2.email,
                wpm: player2.wpm,
                accuracy: player2.accuracy,
                score: player2.score
            }
        };

        console.log("All details of sessions:", formattedSessions);
        res.json(formattedSessions);
    } catch (error) {
        console.error("Error fetching multiplayer sessions:", error);
        res.status(500).json({ message: "Error fetching multiplayer sessions", error: error.message });
    }
});

module.exports = router;
