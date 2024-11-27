import express from "express";
import { login } from "../controllers/loginController.js";

const loginRoute = express.Router();

loginRoute.post("/", login);

export default loginRoute;
