import { saveOverviewData } from "../repositories/overviewRepository.js";

export const saveOverview = async (req, res) => {
  try {
    const { mood, symptoms, energi, nutrisions } = req.body;

    if (!mood || !symptoms || !energi || !nutrisions) {
      return res.status(400).json({ message: "Manglende data." });
    }

    const overviewData = await saveOverviewData(req.user.id, {
      mood,
      symptoms,
      energi,
      nutrisions,
    });

    res
      .status(201)
      .json({ message: "Oversigtsdata gemt.", data: overviewData });
  } catch (error) {
    console.error("Fejl ved gemning af oversigtsdata:", error);
    res.status(500).json({ message: "Fejl på serveren." });
  }
};
