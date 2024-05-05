import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import cors from 'cors';

import connection from './db.js';
import userRoutes from './routes/registerUsers.js';
import authRoutes from './routes/authenticate.js';
import verifyEmail from './routes/verifyEmail.js';

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/registerUsers', userRoutes);
app.use('/api/authenticate', authRoutes);
app.use('/api/verifyEmail', verifyEmail);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
