import express from "express";
import config from "./config";

const app = express();

app.listen(config.APP_PORT, () => {
  console.log(`App listening to ${config.APP_PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
