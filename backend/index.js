import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());   //allow use to parse incoming request: req.body
app.use(cookieParser());   //allow use to parse incoming request: req.cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running on port ", PORT);
});
