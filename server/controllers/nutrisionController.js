import { allNutrisions } from "../repositories/nutrisionRepository.js";

export const getNutrision = async (req, res) => {
  try {
    const nutrision = await allNutrisions();

    res.json(nutrision);
  } catch (error) {
    res.status(500).json({ message: "error fetching nutrisions" });
  }
};
