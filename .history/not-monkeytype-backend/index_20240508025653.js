const express = require("express");
const cors = require("cors");
const connection = require("./db");
const { User } = require("./models/user");
const { gameSession } = require("./models/gameSession");
const userRoutes = require("./routes/registerUsers");
const authRoutes = require("./routes/authenticate");
const verifyEmailRoutes = require("./routes/verifyEmail");
const deleteUserRoutes = require("./routes/deleteUser");
const profileRoutes = require("./routes/profileController"); 
const gameSessionController = require("./routes/gameSessionController"); 

const app = express();

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/registerUsers", userRoutes);
app.use("/api/authenticate", authRoutes);
app.use("/api/verifyEmail", verifyEmailRoutes);
app.use("/api/deleteUser", deleteUserRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/gameSession", gameSessionController);

setInterval(async () => {
    await User.deleteUnverifiedUsers();
}, 90 * 1000); // 30 seconds

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
