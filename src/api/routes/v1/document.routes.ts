import express from "express";
import { DocumentController } from "../../controllers/document.controller.js";
import { Authentication } from "../../middlewares/auth.middleware.js";

const documentRouter = express.Router();

documentRouter.use(Authentication);
documentRouter.get("/get-document", DocumentController.getTheDocuments);
documentRouter.post("/delete-document", DocumentController.deleteTheDocument);

export { documentRouter };
