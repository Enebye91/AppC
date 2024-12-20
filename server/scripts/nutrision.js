import connectDB from "../databaseHandler/databaseHandlerMongoDB.js";
import dotenv from "dotenv";
import Nutrision from "../models/Nutrision.js";

connectDB();
dotenv.config();

const Nutrisions = async () => {
  const predefinedNutrisions = [
    { name: "Bagels" },
    { name: "Boller" },
    { name: "Burgerboller" },
    { name: "Croutoner" },
    { name: "Dressinger" },
    { name: "Energibarer" },
    { name: "Forårsruller" },
    { name: "Franskbrød" },
    { name: "Færdigretter" },
    { name: "Granola" },
    { name: "Kage" },
    { name: "Kiks" },
    { name: "Knækbrød" },
    { name: "Kornprodukter" },
    { name: "Marinader" },
    { name: "Madtærter" },
    { name: "Pandekager" },
    { name: "Parnerede produkter" },
    { name: "Pasta" },
    { name: "Pizza" },
    { name: "Proteinbarer" },
    { name: "Pølser" },
    { name: "Rasp" },
    { name: "Rugbrød" },
    { name: "Slik" },
    { name: "Småkager" },
    { name: "Suacer & sovser" },
    { name: "Tortilla" },
    { name: "Tærter" },
    { name: "Vafler" },
  ];

  try {
    const Nutrisions = await Nutrision.countDocuments();

    if (Nutrisions === 0) {
      await Nutrision.insertMany(predefinedNutrisions);
      console.log("Nutrision tilføjet til databasen!");
    } else {
      console.log("Nutrisions findes allerede i databasen.");
    }
    process.exit(0);
  } catch (error) {
    console.error("Fejl ved seeding af nutrisions:", error);
    process.exit(1);
  }
};

const seedNutrision = async () => {
  await connectDB();
  await Nutrisions();
};

seedNutrision();
