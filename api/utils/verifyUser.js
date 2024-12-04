import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies["access-token"]
  console.log(token)
  if (!token) {
    console.error("No token found in cookies");
    return next(errorHandler(401, "unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.error("Token verification error:", err);
    if (err) return next(errorHandler(403, "forbidden"));

    req.user = user;
    next();
  });
};

