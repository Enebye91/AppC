import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  console.log("Cookies received:", req.cookies);
  const token = req.cookies.authToken;
  // const token =
  //   req.cookies.authToken || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log("Token verification error:", err.message);
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    console.log("Token successfully decoded:", decoded);
    req.user = decoded;
    next();
  });
};

export default authenticateToken;
