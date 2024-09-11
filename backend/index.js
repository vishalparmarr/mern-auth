import express from 'express';
import { connectDb } from './db/connectDb.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log('Server is running on port ', PORT);
})