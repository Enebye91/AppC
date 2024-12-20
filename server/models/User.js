import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide a valid email address.",
    ],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    // minlength: [8, "Username must be at least 4 characters long"],
    // maxlenght: [12, "Username must be less then 12 characters long"],
  },
  password: {
    type: String,
    required: true,
    // minlength: [8, "Password must be at least 4 characters long"],
    // maxlenght: [12, "Password must be less then 12 characters long"],
  },
  cookieConsent: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.validatePassword = async function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

export default mongoose.model("User", userSchema);
