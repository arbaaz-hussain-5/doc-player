import express from "express";
import { Authentication } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import { UploadController } from "../controllers/upload.controller.js";

const uploadRouter = express.Router();
uploadRouter.use(Authentication);
uploadRouter.use(upload);
uploadRouter.post("/", UploadController.uploadTheFile);

export { uploadRouter };
