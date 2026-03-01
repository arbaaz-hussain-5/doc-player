import { Response, Request, Application } from "express";
import { createComment } from "../../services/comment.service.js";

const CommentController = {
  postTheComment: async function (req: Request, res: Response) {
    await createComment(req.body.commentMessage, req.body.commentTo, req.body.commentBy);
    res.send("commented");
  },
  getCommentByUserId: function (req: Request, res: Response) {},
};

export { CommentController };
