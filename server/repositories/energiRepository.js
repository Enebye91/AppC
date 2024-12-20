import Energi from "../models/Energi.js";

export const allEnergies = async () => {
  try {
    const energies = await Energi.find();

    return energies;
  } catch (error) {
    throw new Error("");
  }
};
