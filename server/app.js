import express from "express";
import cors from "cors";
import signupRoutes from "./routes/signupRoutes.js";
import loginRoute from "./routes/loginRoute.js";
import userRoute from "./routes/userPageRoute.js";
import symptomRoute from "./routes/symptomRoute.js";
import nutrisionRoute from "./routes/nutrisionRoute.js";
import moodRoute from "./routes/moodRoute.js";
import energiRoute from "./routes/energiRoute.js";
import overviewRouter from "./routes/overviewRoute.js";

import http from "http";
import connectDB from "./databaseHandler/databaseHandlerMongoDB.js";
import dotenv from "dotenv";

const app = express();
const server = http.createServer(app);

connectDB();
dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: "GET,POST, OPTIONS",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoute);
app.use("/api/user", userRoute);
app.use("/api/symptom", symptomRoute);
app.use("/api/nutrision", nutrisionRoute);
app.use("/api/mood", moodRoute);
app.use("/api/energi", energiRoute);
app.use("/api/Overview", overviewRouter);

server.listen(5174, "0.0.0.0", () => {
  console.log("Server is running on port 5174");
});

export default app;
