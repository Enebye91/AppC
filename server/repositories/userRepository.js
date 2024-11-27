// import User from "../models/User.js";

// export const findUserByEmail = async (email) => User.findOne({ email });

// export const findUserByUsername = async (username) =>
//   User.findOne({ username });

// export const createUser = async (userData) => {
//   const user = new User(userData);
//   return await user.save();
// };
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

// Opretter en ny bruger
export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error("Error creating user");
  }
};
