import User from "../models/User.js";

export const findUserByUsername = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (error) {
    throw new Error("Error finding user by username");
  }
};

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw new Error("Error finding user by email");
  }
};

export const findUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw new Error("User not found");
  }
};

export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error("Error creating user");
  }
};
