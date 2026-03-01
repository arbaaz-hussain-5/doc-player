import express from "express";
import { Authentication } from "../middlewares/auth.middleware.js";
import { CommentController } from "../controllers/comment.controller.js";

const commentRouter = express.Router();
commentRouter.use(Authentication);

commentRouter.post("/", CommentController.postTheComment);

export { commentRouter };
