import Mood from "../models/Mood.js";

export const allMoods = async () => {
  try {
    const moods = await Mood.find();

    return moods;
  } catch (error) {
    throw new Error("");
  }
};
