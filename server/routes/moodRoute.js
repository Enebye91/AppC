import express from "express";
import { getMood } from "../controllers/moodController.js";

const moodRoute = express.Router();

moodRoute.get("/", getMood);

export default moodRoute;
