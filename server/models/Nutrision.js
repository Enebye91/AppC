import mongoose from "mongoose";

const nutrisionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("Nutrision", nutrisionSchema);
