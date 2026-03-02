import cookieParser from 'cookie-parser';
import express from 'express';
import { masterRouter } from '../api/routes/index.js';
async function loadExpress() {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/api', masterRouter);
  return app;
}
export { loadExpress };
//# sourceMappingURL=express.loader.js.map
