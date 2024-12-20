import express from "express";
import { getNutrision } from "../controllers/nutrisionController.js";

const nutrisionRoute = express.Router();

nutrisionRoute.get("/", getNutrision);

export default nutrisionRoute;
