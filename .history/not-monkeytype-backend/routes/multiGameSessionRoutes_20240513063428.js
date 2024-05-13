const express = require("express");
const router = express.Router();
const multiGameSessionController = require("../Controllers/multiGameSessionController");

router.get("/:email", async (req, res) => {
    const { email } = req.params;
    console.log("Request to get multiplayer game sessions for user with email:", email);

    try {
        const sessions = await multiGameSessionController.findByEmail(email);

        // Initialize an array to store formatted sessions
        const formattedSessions = [];

        // Iterate over each session
        sessions.forEach(session => {
            // Extract player details for each session
            const player1 = session.scores.find(score => score.email === email);
            const player2 = session.scores.find(score => score.email !== email);

            // Format the output for the current session
            const formattedSession = {
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

            // Push the formatted session to the array
            formattedSessions.push(formattedSession);
        });

        console.log("All details of sessions:", formattedSessions);
        res.json(formattedSessions);
    } catch (error) {
        console.error("Error fetching multiplayer sessions:", error);
        res.status(500).json({ message: "Error fetching multiplayer sessions", error: error.message });
    }
});


module.exports = router;
