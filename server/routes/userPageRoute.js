import express from "express";
import { getUserData } from "../controllers/userPageController.js";
import authenticateToken from "../middleware/authToken.js";

const router = express.Router();

router.get("/", authenticateToken, getUserData);

export default router;
