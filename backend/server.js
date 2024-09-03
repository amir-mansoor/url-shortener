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

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's origin
  methods: ["GET", "POST"], // Allow only GET and POST methods
};

// Apply CORS middleware with the above options
app.use(cors());
app.set("trust proxy", true);

connectDB();

app.use(express.json());

app.use("/api/link", linkRoutes);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
