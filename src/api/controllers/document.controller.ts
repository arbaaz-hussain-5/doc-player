import { Response, Request, Application } from 'express';
import { deleteTheDocument, getTheDocument } from '../../services/document.service.js';

const DocumentController = {
  getTheDocuments: async (req: Request, res: Response, next: Function) => {
    try {
      const targetDocument = await getTheDocument(req.body.documentId);
      res.send(targetDocument);
    } catch (err) {
      next(err);
    }
  },
  deleteTheDocument: async (req: Request, res: Response, next: Function) => {
    try {
      await deleteTheDocument(req.body.documentId);
    } catch (err) {
      next(err);
    }
  }
};

export { DocumentController };
