import connectDB from "../databaseHandler/databaseHandlerMongoDB.js";
import dotenv from "dotenv";
import Symptom from "../models/Symptoms.js";

connectDB();
dotenv.config();

const Symptoms = async () => {
  const predefinedSymptoms = [
    { name: "Hovedpine" },
    { name: "Træthed" },
    { name: "Mavesmerter" },
    { name: "Kvalme" },
    { name: "Diarré" },
    { name: "Led" },
  ];

  try {
    const existingSymptoms = await Symptom.countDocuments();

    if (existingSymptoms === 0) {
      await Symptom.insertMany(predefinedSymptoms);
      console.log("Symptomer tilføjet til databasen!");
    } else {
      console.log("Symptomer findes allerede i databasen.");
    }
    process.exit(0);
  } catch (error) {
    console.error("Fejl ved seeding af symptomer:", error);
    process.exit(1);
  }
};

const runSeeder = async () => {
  await connectDB();
  await Symptoms();
};

runSeeder();
