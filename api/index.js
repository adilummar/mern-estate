import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user.route.js";
import authRouter from "./routers/auth.route.js";

const app = express();
app.use(express.json());
dotenv.config();

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

app.listen(3000, () => console.log("Server is running on port 3000!!!"));
