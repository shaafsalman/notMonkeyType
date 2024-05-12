require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
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
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

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





// Socket.io events
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
    console.log(`User ${socket.id} joined room ${roomName}`);
  });

  socket.on("startTest", (roomName) => {
    let countdown = 3;
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        io.to(roomName).emit("countdown", countdown);
        countdown--;
      } else {
        clearInterval(intervalId);
        io.to(roomName).emit("startTest");
      }
    }, 1000);
  });

  socket.on("submitScore", (data) => {
    const { wpm, accuracy, score, email, name, userId } = data.score;
  
    console.log(`Score received from ${userId}: WPM: ${wpm}, Accuracy: ${accuracy}, Score: ${score}, Email: ${email}, User ID: ${userId}`);
  
    io.in(data.roomName).emit("score", {
      id: userId,
      wpm: wpm,
      accuracy: accuracy,
      score: score,
      email: email,
      userId: userId
    });
  });
  

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

setInterval(async () => {
  await User.deleteUnverifiedUsers();
}, 90 * 1000);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
