import Nutrision from "../models/Nutrision.js";

export const allNutrisions = async () => {
  try {
    const nutrisions = await Nutrision.find();

    return nutrisions;
  } catch (error) {
    throw new Error("");
  }
};
