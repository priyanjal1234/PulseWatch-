import cookieParser from "cookie-parser";
import express from "express";

const app = express();

import monitorRouter from './routes/monitor.router.js'

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.get("/health", function (req, res) {
  res.json({ message: "Monitor Service is healthy" });
});

app.use("/",monitorRouter)

export default app