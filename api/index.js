import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user.route.js";

const app = express();
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

app.listen(3000, () => console.log("Server is running on port 3000!!!"));
