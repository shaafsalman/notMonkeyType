const { MultiGameSession } = require("../models/multiGameSession");

const createMultiplayerSessionTable = async (roomCode) => {
    try {
        const multiGameSession = new MultiGameSession({ roomCode });
        await multiGameSession.save();
        console.log(`Multiplayer session table created for room ${roomCode}`);
    } catch (error) {
        console.error(`Error creating multiplayer session table for room ${roomCode}:`, error);
    }
};

const addUserToMultiplayerSession = async (roomCode, userId) => {
    try {
        const multiGameSession = await MultiGameSession.findOneAndUpdate(
            { roomCode },
            { $push: { participants: userId } },
            { new: true }
        );
        console.log(`User added to multiplayer session for room ${roomCode}:`, userId);
        return multiGameSession;
    } catch (error) {
        console.error(`Error adding user to multiplayer session for room ${roomCode}:`, error);
        throw error;
    }
};

const updateMultiplayerSessionWinner = async (roomCode, winnerId) => {
    try {
        const multiGameSession = await MultiGameSession.findOneAndUpdate(
            { roomCode },
            { winner: winnerId },
            { new: true }
        );
        console.log(`Winner updated for multiplayer session in room ${roomCode}:`, winnerId);
        return multiGameSession;
    } catch (error) {
        console.error(`Error updating winner for multiplayer session in room ${roomCode}:`, error);
        throw error;
    }
};

module.exports = {
    createMultiplayerSessionTable,
    addUserToMultiplayerSession,
    updateMultiplayerSessionWinner
};
