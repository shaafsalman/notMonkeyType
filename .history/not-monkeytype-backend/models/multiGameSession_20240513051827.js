const mongoose = require("mongoose");

const multiGameSessionSchema = new mongoose.Schema({
    roomCode: { type: String, required: true, unique: true },
    scores: [{
        wpm: { type: Number, required: true },
        accuracy: { type: Number, required: true },
        score: { type: Number, required: true },
        email: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        createdAt: { type: Date, default: Date.now }
    }],
}, { timestamps: true });

multiGameSessionSchema.statics.addScore = async function (roomCode, scoreData) {
    try {
        const multiGameSession = await this.findOneAndUpdate(
            { roomCode },
            { $push: { scores: scoreData } },
            { new: true }
        );
        return multiGameSession;
    } catch (error) {
        console.error(`Error adding score to multiplayer session for room ${roomCode}:`, error);
        throw error;
    }
};

multiGameSessionSchema.statics.getGameSessionsByRoomCode = async function (roomCode) {
    try {
        const multiGameSession = await this.findOne({ roomCode });
        return multiGameSession;
    } catch (error) {
        console.error(`Error fetching multiplayer session by room code ${roomCode}:`, error);
        throw error;
    }
};

multiGameSessionSchema.statics.getGameSessionsByUserId = async function (userId) {
    try {
        const multiGameSessions = await this.find({ "scores.userId": userId });
        return multiGameSessions;
    } catch (error) {
        console.error(`Error fetching multiplayer sessions by user ID ${userId}:`, error);
        throw error;
    }
};

const MultiGameSession = mongoose.model("MultiGameSession", multiGameSessionSchema);

module.exports = { MultiGameSession };
