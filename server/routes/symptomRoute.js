import express from "express";
import { getSymptoms } from "../controllers/symptomsController.js";

const symptomRoute = express.Router();

symptomRoute.get("/", getSymptoms);

export default symptomRoute;
