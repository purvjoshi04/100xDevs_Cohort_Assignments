// Middleware for handling auth

const jwt = require("jsonwebtoken");
require("dotenv").config();
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: "Authorization header is missing",
    });
  }
  const jwtToken = token.split(" ")[1];
  try {
    const decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET);
    if (decodedValue.username) {
      req.user = decodedValue;
      next();
    } else {
      res.status(403).json({
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    res.json({
      message: "Incorrect inputs",
      error: error.message,
    });
  }
}

module.exports = adminMiddleware;
