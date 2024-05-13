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

const MultiGameSession = mongoose.model("MultiGameSession", multiGameSessionSchema);

module.exports = { MultiGameSession };
