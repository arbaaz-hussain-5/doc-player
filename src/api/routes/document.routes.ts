import express from "express";
import { DocumentController } from "../controllers/document.controller.js";

const documentRouter = express.Router();

documentRouter.get("/", DocumentController.getDocuments)
documentRouter.get("/read", DocumentController.readTheDocument);


export { documentRouter };
