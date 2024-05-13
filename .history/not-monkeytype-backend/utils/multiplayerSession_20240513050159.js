const { gameSession } = require("../models/gameSession");

// Function to create a new multiplayer session table
const createMultiplayerSessionTable = async (roomName) => {
    try {
        const session = new gameSession({ roomName });
        await session.save();
        console.log(`Multiplayer session table created for room ${roomName}`);
    } catch (error) {
        console.error(`Error creating multiplayer session table for room ${roomName}:`, error);
    }
};

// Function to add user data to the multiplayer session
const addUserToMultiplayerSession = async (roomName, userData) => {
    try {
        await gameSession.findOneAndUpdate(
            { roomName },
            { $push: { users: userData } },
            { new: true }
        );
        console.log(`User added to multiplayer session for room ${roomName}:`, userData);
    } catch (error) {
        console.error(`Error adding user to multiplayer session for room ${roomName}:`, error);
    }
};

// Function to update winner of the multiplayer session
const updateMultiplayerSessionWinner = async (roomName, winnerData) => {
    try {
        await gameSession.findOneAndUpdate(
            { roomName },
            { winner: winnerData },
            { new: true }
        );
        console.log(`Winner updated for multiplayer session in room ${roomName}:`, winnerData);
    } catch (error) {
        console.error(`Error updating winner for multiplayer session in room ${roomName}:`, error);
    }
};

module.exports = {
    createMultiplayerSessionTable,
    addUserToMultiplayerSession,
    updateMultiplayerSessionWinner
};
