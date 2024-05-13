const { MultiGameSession } = require("../models/multiGameSession");

class MultiGameSessionController {
    constructor() {}

    async saveScore(roomCode, scoreData) {
        try {
            // Find the multiplayer session by room code
            let session = await MultiGameSession.findOne({ roomCode });

            // If the session doesn't exist, create a new one
            if (!session) {
                session = new MultiGameSession({ roomCode });
            }

            // Push the score data to the scores array
            session.scores.push(scoreData);

            // Save the session to the database
            await session.save();

            console.log(`Score saved for multiplayer session in room ${roomCode}:`, scoreData);
        } catch (error) {
            console.error(`Error saving score for multiplayer session in room ${roomCode}:`, error);
            throw error;
        }
    }
}

module.exports = new MultiGameSessionController();
