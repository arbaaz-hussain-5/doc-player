import { Response, Request, Application } from "express";
import {
  doTheComment,
  deleteTheComment,
  replyToComment,
  deleteTheReply,
  listTheReply,
  listTheComment,
  editTheComment,
  editTheReply,
} from "../../services/comment.service.js";

const CommentController = {
  doTheComment: async function (req: Request, res: Response, next: Function) {
    try {
      await doTheComment(
        req.body.commentMessage,
        req.body.commentTo,
        req.body.commentBy,
      );
      res.send("commented");
    } catch (err) {
      next(err);
    }
  },
  doTheReply: async function (req: Request, res: Response, next: Function) {
    try {
      await replyToComment(
        req.body.commentMessage,
        req.body.commentTo,
        req.body.commentBy,
      );
      res.send("replied");
    } catch (err) {
      next(err);
    }
  },
  deleteTheComment: async function (
    req: Request,
    res: Response,
    next: Function,
  ) {
    try {
      await deleteTheComment(req.body.commentId);
      res.send("deleted");
    } catch (err) {
      next(err);
    }
  },
  deleteTheReply: async function (req: Request, res: Response, next: Function) {
    try {
      await deleteTheReply(req.body.replyId);
      res.send("deleted");
    } catch (err) {
      next(err);
    }
  },
  editTheComment: async function (req: Request, res: Response, next: Function) {
    try {
      await editTheComment(req.body.commentId, req.body.newMesage);
      res.send("edited");
    } catch (err) {
      next(err);
    }
  },
  editTheReply: async function (req: Request, res: Response, next: Function) {
    try {
      await editTheReply(req.body.replytId, req.body.newMesage);
      res.send("edited");
    } catch (err) {
      next(err);
    }
  },
  listTheComment: async function (req: Request, res: Response, next: Function) {
    try {
      await listTheComment(req.body.documentId);
      res.send("list sended");
    } catch (err) {
      next(err);
    }
  },
  listTheReply: async function (req: Request, res: Response, next: Function) {
    try {
      await listTheReply(req.body.commentId);
      res.send("list sended");
    } catch (err) {
      next(err);
    }
  },
};

export { CommentController };
