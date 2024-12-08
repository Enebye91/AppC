import {
  findUserByEmail,
  findUserByUsername,
  createUser,
} from "../repositories/userRepository.js";

export const signup = async (req, res) => {
  const { firstname, lastname, email, username, password, cookieConsent } =
    req.body;

  if (!cookieConsent) {
    return res
      .status(400)
      .json({ message: "You must accept the cookie policy" });
  }
  console.log("Received signup data:", req.body);

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = await createUser({
      firstname,
      lastname,
      username,
      email,
      password,
      cookieConsent,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user", error });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);
    if (!user || !(await user.validatePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to log in", error });
  }
};
