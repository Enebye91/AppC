import express from "express";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);

const corsOptions = {
  origin: "*",
  methods: "GET,POST",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

(async function startServer() {
  try {
    server.listen(5174, () => {
      console.log("Server is running on port 5174");
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
})();
