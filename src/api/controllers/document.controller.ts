import { Response, Request, Application } from "express";
import { findDocumentById } from "../../services/document.service.js";

const DocumentController = {
  getDocuments: async (req: Request, res: Response) => {
    res.send("welcome to document page");
  },
  readTheDocument: async function (req: Request, res: Response) {
    const id = req.query.documentId;
    if (typeof id === "string") res.send(await findDocumentById(id));
  },
};

export { DocumentController };
