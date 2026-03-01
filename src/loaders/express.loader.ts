import cookieParser from "cookie-parser";
import express from "express";
import { masterRouter } from "../api/routes/index.js";
import { Application } from "express";

async function loadExpress(): Promise<Application> {
  const app: Application = express();

  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api", masterRouter);

  return app;
}

export { loadExpress };
