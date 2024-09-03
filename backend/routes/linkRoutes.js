import express from "express";
import {
  createLink,
  getLinkDetails,
  getUserLinks,
  redirectUser,
} from "../controllers/linkController.js";
const router = express.Router();

router.route("/:id").get(redirectUser);

router.route("/create").post(createLink);
router.route("/links/:id").get(getUserLinks);
router.route("/link/:id").get(getLinkDetails);

export default router;
