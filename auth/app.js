import cookieParser from "cookie-parser";
import express from "express";

const app = express();

// Route Imports
import userRouter from "./routes/user.router.js";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRouter);

app.get("/health", function (req, res) {
  res.json({ message: "Auth Service is healthy" });
});

export default app;
