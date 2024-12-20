import Overview from "../models/OverviewData.js";

export const saveOverviewData = async (userId, overviewData) => {
  try {
    const newOverview = new Overview({
      userId: userId,
      mood: overviewData.mood,
      symptoms: overviewData.symptoms,
      energi: overviewData.energi,
      nutrisions: overviewData.nutrisions,
    });

    await newOverview.save();
    return newOverview;
  } catch (error) {
    console.error("Fejl ved gemning af oversigtsdata:", error);
    throw new Error("Fejl ved gemning af oversigtsdata.");
  }
};
