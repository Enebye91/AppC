import express from "express";
import { energi } from "../controllers/energiController.js";

const energiRoute = express.Router();

energiRoute.get("/", energi);

export default energiRoute;
