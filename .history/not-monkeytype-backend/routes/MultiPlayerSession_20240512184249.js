import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
    credentials: true
  }
});
const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);
        console.log(`User ${socket.id} joined room ${roomName}`);
    });

    socket.on('startTest', (roomName) => {
        // Countdown before starting the test
        let countdown = 3;
        const intervalId = setInterval(() => {
            if (countdown > 0) {
                io.to(roomName).emit('countdown', countdown);
                countdown--;
            } else {
                clearInterval(intervalId);
                io.to(roomName).emit('startTest');
            }
        }, 1000);
    });

    socket.on('submitScore', (data) => {
        console.log(`Score received from ${socket.id}: WPM: ${data.score.wpm}, Accuracy: ${data.score.accuracy}`);
        // Emit score to all clients in the room
        io.in(data.roomName).emit('score', { 
            id: socket.id, 
            wpm: data.score.wpm, 
            accuracy: data.score.accuracy 
        });
    });
    

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});