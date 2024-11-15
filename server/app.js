// import express from "express";
// import http from "http";
// import cors from "cors";
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import User from "./models/User.js";

// dotenv.config();

// const app = express();
// const server = http.createServer(app);

// const corsOptions = {
//   origin: "*",
//   methods: "GET,POST",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.static("public"));

// const serverURL = "http://86.52.2.35:5174";

// mongoose
//   .connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Failed to connect to MongoDB", error));

// app.post("/signup", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create user", error });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: "user is not found" });

//     const Match = await bcrypt.compare(password, user.password);
//     if (!Match) return res.status(400).json({ message: "Invalid credentials" });
//   } catch (error) {
//     res.status(500).json({ message: "failed to log in", error });
//   }
// });

// // (async function startServer() {
// //   try {
// //     server.listen(5174, () => {
// //       console.log("Server is running on port 5174");
// //     });
// //   } catch (error) {
// //     console.error("Failed to connect to the database", error);
// //   }
// // })();

// server.listen(5174, "0.0.0.0", () => {
//   console.log("Server is running on port 5174");
// });

import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const corsOptions = {
  // origin: "http://86.52.2.35:19006",
  origin: "*",
  methods: "GET,POST",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

// app.post("/", (req, res) => {
//   res.send("Server is up and running!");
// });

app.post("/signup", async (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
});

app.get("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to log in", error });
  }
});

server.listen(5174, "0.0.0.0", () => {
  console.log("Server is running on port 5174");
});
