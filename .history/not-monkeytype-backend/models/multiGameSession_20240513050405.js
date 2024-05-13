const mongoose = require("mongoose");
const Joi = require("joi");

const multiGameSessionSchema = new mongoose.Schema({
    roomCode: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    winner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const MultiGameSession = mongoose.models.MultiGameSession || mongoose.model("MultiGameSession", multiGameSessionSchema);

const createMultiGameSession = async (roomCode) => {
    try {
        const multiGameSession = new MultiGameSession({ roomCode });
        await multiGameSession.save();
        return multiGameSession;
    } catch (error) {
        console.error('Error creating multiplayer game session:', error);
        throw error;
    }
};

const addParticipantToMultiGameSession = async (roomId, userId) => {
    try {
        const multiGameSession = await MultiGameSession.findById(roomId);
        if (!multiGameSession) {
            throw new Error('Multiplayer game session not found');
        }
        multiGameSession.participants.push(userId);
        await multiGameSession.save();
        return multiGameSession;
    } catch (error) {
        console.error('Error adding participant to multiplayer game session:', error);
        throw error;
    }
};

const setWinnerForMultiGameSession = async (roomId, userId) => {
    try {
        const multiGameSession = await MultiGameSession.findById(roomId);
        if (!multiGameSession) {
            throw new Error('Multiplayer game session not found');
        }
        multiGameSession.winner = userId;
        await multiGameSession.save();
        return multiGameSession;
    } catch (error) {
        console.error('Error setting winner for multiplayer game session:', error);
        throw error;
    }
};

module.exports = { MultiGameSession, createMultiGameSession, addParticipantToMultiGameSession, setWinnerForMultiGameSession };
