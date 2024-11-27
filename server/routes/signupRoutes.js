import express from "express";
import { signup } from "../controllers/signupController.js";

const signupRoutes = express.Router();

signupRoutes.post("/signup", signup);

export default signupRoutes;


