import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import signupRoutes from "./routes/signupRoutes.js";
import loginRoute from "./routes/loginRoute.js";
import userRoute from "./routes/userPageRoute.js";
import http from "http";
import connectDB from "./databaseHandler/databaseHandlerMongoDB.js";

const app = express();
const server = http.createServer(app);

connectDB();

app.use(cors({ origin: "*", methods: "GET,POST", credentials: true }));

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoute);
app.use("/api/user", userRoute);

server.listen(5174, "0.0.0.0", () => {
  console.log("Server is running on port 5174");
});

export default app;
