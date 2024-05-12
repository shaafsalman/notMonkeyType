require("dotenv").config();
import express from "express";
import cors from "cors";
import connection from "./db";
import { User } from "./models/user";
import { gameSession } from "./models/gameSession";
import userRoutes from "./routes/registerUsers";
import authRoutes from "./routes/authenticate";
import verifyEmailRoutes from "./routes/verifyEmail";
import deleteUserRoutes from "./routes/deleteUser";
import profileRoutes from "./routes/profileController"; 
import gameSessionController from "./routes/gameSessionController"; 
import server from "./multiPlayerSession"; // Import the server instance

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

// Delete unverified users every 90 seconds
setInterval(async () => {
    await User.deleteUnverifiedUsers();
}, 90 * 1000);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
