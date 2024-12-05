import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user.route.js";
import authRouter from "./routers/auth.route.js";
import listingRouter from "./routers/listing.route.js"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())
dotenv.config();
app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  credentials: true, // Allow cookies and credentials
}));

const mongo_url = process.env.MONGO_DB;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing",listingRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(2000, () => console.log("Server is running on port 2000!!!"));
