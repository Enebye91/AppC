import { allMoods } from "../repositories/moodRepository.js";

export const getMood = async (req, res) => {
  try {
    const mood = await allMoods();

    res.json(mood);
  } catch (error) {
    res.status(500).json({ message: "error fetching mood" });
  }
};
