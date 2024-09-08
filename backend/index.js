import express from 'express';
import { connectDb } from './db/connectDb.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log('Server is running on port ', PORT);
})