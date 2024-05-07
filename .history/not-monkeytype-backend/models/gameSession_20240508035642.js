const mongoose = require("mongoose");
const Joi = require("joi");

const gameSessionSchema = new mongoose.Schema({
    textUsed: { type: String, required: true },
    score: { type: Number, required: true },
    wpm: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    sessionTime: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    email: { type: String, required: true }
});

const GameSession = mongoose.models.GameSession || mongoose.model("GameSession", gameSessionSchema);

const validateGameSession = (data) => {
    const schema = Joi.object({
        textUsed: Joi.string().required().label("Text Used"),
        score: Joi.number().required().label("Score"),
        wpm: Joi.number().required().label("Words Per Minute"),
        accuracy: Joi.number().required().label("Accuracy"),
        sessionTime: Joi.number().required().label("Session Time"),
        userId: Joi.string().required().label("User ID")
    });
    return schema.validate(data);
};

const getAllGameSessions = async () => {
  try {
    const gameSessions = await GameSession.find();
    return gameSessions;
  } catch (error) {
    console.error('Error fetching all game sessions:', error);
    throw error;
  }
};

const getGameSessionsByUserId = async (userId) => {
  try {
    return await GameSession.find({ userId });
  } catch (error) {
    console.error('Error fetching game sessions:', error);
    throw error;
  }
};


const getAllGameSessionsByUserId = async (userId) => {
  try {
      const gameSessions = await GameSession.find({ userId });
      return gameSessions;
  } catch (error) {
      console.error('Error fetching game sessions:', error);
      throw error;
  }
};

module.exports = { GameSession, validateGameSession, getGameSessionsByUserId };
