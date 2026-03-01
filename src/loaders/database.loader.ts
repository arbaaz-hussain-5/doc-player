import mongoose from "mongoose";
import { config } from "../config/index.js";

async function loadDatabase() {
  mongoose
    .connect(config.dataBaseUrl || "")
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch(err => {
      console.error("Connection error:", err);
    });
}

export { loadDatabase };
