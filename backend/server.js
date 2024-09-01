import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import path from "path";
import notFound from "./middleware/errorHandler.js";
import linkRoutes from "./routes/linkRoutes.js";
const app = express();

const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

connectDB();

app.use("/api/link", linkRoutes);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
