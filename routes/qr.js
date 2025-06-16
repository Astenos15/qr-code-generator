import express from "express";
import { getInputLink, processInputLink } from "../controllers/qr.js";
const router = express.Router();

router.route("/").get(getInputLink).post(processInputLink);

export default router;
