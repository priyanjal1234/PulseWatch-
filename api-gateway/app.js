import express from "express";
import cors from "cors"
import proxy from "express-http-proxy";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  "/api/users",
  proxy("http://localhost:3001")
);

app.use("/api/monitors",proxy("http://localhost:3002"))

export default app;
