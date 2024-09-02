import express from "express";
import { createLink } from "../controllers/linkController.js";
const router = express.Router();

router.route("/create").post(createLink);

export default router;
