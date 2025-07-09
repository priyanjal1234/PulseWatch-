import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import db from "./config/db.js";

db()
  .then(function () {
    const port = process.env.PORT || 4002;
    app.listen(port, function () {
      console.log(`Monitor Service is running on port ${port}`);
    });
  })
  .catch(function (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(`Error connecting with mongo: ${error}`);
    }
  });
