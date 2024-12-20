import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("Symptom", symptomSchema);


