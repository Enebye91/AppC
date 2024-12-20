import { allSymptoms } from "../repositories/symptomsRepository.js";

export const getSymptoms = async (req, res) => {
  try {
    const symptomer = await allSymptoms();

    res.json(symptomer);
  } catch (error) {
    res.status(500).json({ message: "error fteching symptoms" });
  }
};
