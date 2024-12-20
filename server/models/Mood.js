import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("Mood", moodSchema);
