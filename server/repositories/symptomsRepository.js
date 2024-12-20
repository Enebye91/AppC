import Symptom from "../models/Symptoms.js";

export const allSymptoms = async () => {
  try {
    const symptoms = await Symptom.find();

    return symptoms;
  } catch (error) {
    throw new Error("");
  }
};
