import { Response, Request, Application } from "express";
import { addDocument } from "../../services/document.service.js";
const UploadController = {
  uploadTheFile: async function (req: Request, res: Response) {
    if (req.file) {
      await addDocument(req.file.originalname, req.userId, "www.comdmdmd", ["comedy"]);
      res.send("done");
    } else {
      res.send("error");
    }
  },
};

export { UploadController };
