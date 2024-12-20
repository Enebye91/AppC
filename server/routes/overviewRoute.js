import express from "express";
import { saveOverview } from "../controllers/overviewController.js";

const overviewRouter = express.Router();

overviewRouter.post("/Overview", saveOverview);

export default overviewRouter;
