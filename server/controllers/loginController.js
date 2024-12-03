import { findUserByUsername } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    console.log(process.env);
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      // { expiresIn: rememberMe ? "30d" : "2h" }
      { expiresIn: "2h" }
    );

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 2000,
    });

    res.status(200).json({ message: "Login successful", user: user.username });
  } catch (error) {
    console.error("Login error: ", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
