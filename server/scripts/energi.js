import connectDB from "../databaseHandler/databaseHandlerMongoDB.js";
import dotenv from "dotenv";
import Energi from "../models/Energi.js";

dotenv.config();

const energiData = async () => {
  const predefinedEnergi = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
  ];

  try {
    const energiCount = await Energi.countDocuments(); 
    if (energiCount === 0) { 
      await Energi.insertMany(predefinedEnergi); 
      console.log("Energi tilføjet til databasen!");
    } else {
      console.log("Energi findes allerede i databasen.");
    }
    process.exit(0);
  } catch (error) {
    console.error("Fejl ved seeding af energi:", error);
    process.exit(1);
  }
};

const seedEnergi = async () => {
  await connectDB();
  await energiData();
};

seedEnergi();

