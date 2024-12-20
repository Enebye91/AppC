import mongoose from "mongoose";

const energiSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
});

export default mongoose.model("Energi", energiSchema);
