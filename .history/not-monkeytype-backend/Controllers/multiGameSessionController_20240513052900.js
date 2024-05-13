const { MultiGameSession } = require("../models/multiGameSession");

class MultiGameSessionController {
    constructor() {}

    async saveScore(roomCode, scoreData) {
        try {
            let session = await MultiGameSession.findOne({ roomCode });

            if (!session) {
                session = new MultiGameSession({ roomCode });
            }

            session.scores.push(scoreData);

            await session.save();

            console.log(`Score saved for multiplayer session in room ${roomCode}:`, scoreData);
        } catch (error) {
            console.error(`Error saving score for multiplayer session in room ${roomCode}:`, error);
            throw error;
        }
    }

    async findByRoomCode(roomCode) {
        try {
            const session = await MultiGameSession.findOne({ roomCode });
            return session;
        } catch (error) {
            console.error(`Error finding multiplayer session by room code ${roomCode}:`, error);
            throw error;
        }
    }

    async findAll() {
        try {
            const sessions = await MultiGameSession.find();
            return sessions;
        } catch (error) {
            console.error('Error fetching all multiplayer sessions:', error);
            throw error;
        }
    }

    async findByEmail(email) {
        try {
            const sessions = await MultiGameSession.find({ "scores.email": email });
            return sessions;
        } catch (error) {
            console.error(`Error finding multiplayer sessions by email ${email}:`, error);
            throw error;
        }
    }
}

module.exports = new MultiGameSessionController();
