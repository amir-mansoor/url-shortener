import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import path from "path";
import notFound from "./middleware/errorHandler.js";
import linkRoutes from "./routes/linkRoutes.js";
import cors from "cors";
const app = express();

const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

// Apply CORS middleware with the above options
app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/link", linkRoutes);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running successfully");
  });
}
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
