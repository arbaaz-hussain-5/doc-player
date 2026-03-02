import { Response, Request, Application } from "express";
import { addTheDocument } from "../../services/document.service.js";
const UploadController = {
  uploadTheFile: async function (req: Request, res: Response) {
    if (req.file) {
      await addTheDocument(req.file.originalname, req.userId, "www.comdmdmd", [
        "comedy",
      ]);
      res.send("done");
    } else {
      res.send("error");
    }
  },
};

export { UploadController };
