import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import signupRoutes from "./routes/signupRoutes.js";
import loginRoute from "./routes/loginRoute.js";
import userRoute from "./routes/userPageRoute.js";
import http from "http";
import connectDB from "./databaseHandler/databaseHandlerMongoDB.js";
import dotenv from "dotenv";

const app = express();
const server = http.createServer(app);

connectDB();
dotenv.config();
// const allowedOrigins = [
//   "http://localhost:5174", // Din lokale udviklings-URL
//   "https://m9oerjy-anonymous-8081.exp.direct",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );
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
