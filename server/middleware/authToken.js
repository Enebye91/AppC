import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {

  const token = req.headers["authorization"]?.split(" ")[1]; 

  if (!token) {
    console.log("No token found in Authorization header");
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("Token verification error:", err.message);
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    console.log("Token successfully decoded:", decoded);
    req.user = decoded;
    next();
  });
};

export default authenticateToken;
