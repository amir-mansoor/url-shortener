import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import path from "path";
const app = express();

const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
