import jwt from "jsonwebtoken";
import { findUserById } from "../repositories/userRepository.js";

export const user = async (req, res) => {
  console.log("Cookies received:", req.cookies);
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "No Token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    try {
      const user = await findUserById(decoded.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Welcome to the user page", user });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong", error: error.message });
    }
  });
};


