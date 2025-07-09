import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  try {
    let token = req.cookies.token;

    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    } else {
      let data = jwt.verify(token, process.env.JWT_KEY);
      req.user = data;
      return next();
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message:
          error instanceof Error
            ? error.message
            : "Error in verifying the token",
      });
  }
}
