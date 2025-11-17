// require('dotenv').config();
// const http = require('http');
// const app = require('./src/app');
// const { connectDB } = require('./src/config/db');

// const PORT = process.env.PORT || 5000;

// connectDB()
//   .then(() => {
//     const server = http.createServer(app);
//     server.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Failed to start server', err);
//     process.exit(1);
//   });

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();
 
const app = express();
app.use(json())
// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Test route
app.get("/", (req, res) => {
  res.send("Server running...");
});

// Correct route mount
app.use("/api/auth", authRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("DB error:", err));
