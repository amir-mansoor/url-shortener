import express from "express";
import { createLink, redirectUser } from "../controllers/linkController.js";
const router = express.Router();

router.route("/:id").get(redirectUser);

router.route("/create").post(createLink);

export default router;
