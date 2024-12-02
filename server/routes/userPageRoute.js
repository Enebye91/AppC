import express from "express";
import authToken from "../middleware/authToken.js";
import { user } from "../controllers/userpageController.js";

const userRoute = express.Router();

userRoute.get("/UserPage", authToken, user);

export default userRoute;
