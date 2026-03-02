import cookieParser from 'cookie-parser';
import express from 'express';
import { v1Router } from '../api/routes/v1/index.js';
import { Application } from 'express';

async function loadExpress(): Promise<Application> {
  const app: Application = express();

  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/api/v1', v1Router);

  return app;
}

export { loadExpress };
