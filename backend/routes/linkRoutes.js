import express from "express";
import {
  createLink,
  getLinkDetails,
  getUserLinks,
  redirectUser,
} from "../controllers/linkController.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Link from "../models/urlModel.js";
const router = express.Router();

router.route("/:id").get(redirectUser);

router.route("/create").post(createLink);
router.route("/links/:id").get(getUserLinks);
router.route("/link/:id").get(getLinkDetails);

export default router;
