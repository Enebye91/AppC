import connectDB from "../databaseHandler/databaseHandlerMongoDB.js";
import dotenv from "dotenv";
import Mood from "../models/Mood.js";

connectDB();
dotenv.config();

const Moods = async () => {
  const predefinedMood = [
    { name: "Awful" },
    { name: "Bad" },
    { name: "Confused" },
    { name: "Exhausted" },
    { name: "Good" },
    { name: "Great" },
    { name: "Happy" },
    { name: "Sick" },
    { name: "Super" },
  ];

  try {
    const Moods = await Mood.countDocuments();

    if (Moods === 0) {
      await Mood.insertMany(predefinedMood);
      console.log("Moods tilføjet til databasen!");
    } else {
      console.log("Moods findes allerede i databasen.");
    }
    process.exit(0);
  } catch (error) {
    console.error("Fejl ved seeding af moods:", error);
    process.exit(1);
  }
};

const seedMood = async () => {
  await connectDB();
  await Moods();
};

seedMood();
