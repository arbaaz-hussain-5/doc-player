import express from 'express';
import { Authentication } from '../../middlewares/auth.middleware.js';
import { CommentController } from '../../controllers/comment.controller.js';

const commentRouter = express.Router();

commentRouter.use(Authentication);
commentRouter.post('/do-comment', CommentController.doTheComment);
commentRouter.post('/delete-comment', CommentController.deleteTheComment);
commentRouter.post('/do-reply', CommentController.doTheReply);
commentRouter.post('/edit-comment', CommentController.editTheComment);
commentRouter.post('/delete-reply', CommentController.deleteTheReply);
commentRouter.post('/edit-reply', CommentController.editTheReply);
commentRouter.post('/list-comment', CommentController.listTheComment);
commentRouter.post('/list-reply', CommentController.listTheReply);

export { commentRouter };
