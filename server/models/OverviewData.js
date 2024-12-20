import mongoose from "mongoose";

const OverviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  mood: {
    type: [String],
    default: [],
  },
  symptoms: {
    type: [String],
    default: [],
  },
  energi: {
    type: [Number],
    default: [],
  },
  nutrisions: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("Overview", OverviewSchema);
