import { allEnergies } from "../repositories/energiRepository.js";

export const energi = async (req, res) => {
  try {
    const energi = await allEnergies();

    const formattedEnergi = energi.map((item) => ({
      id: item._id.toString(),
      number: parseInt(item.number),
    }));

    res.json(formattedEnergi);
  } catch (error) {
    res.status(500).json({ message: "Error fetching energi" });
  }
};
