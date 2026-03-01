import { Router } from 'express';
import { userRouter } from './user.routes.js';
import { authRouter } from './auth.routes.js';
import { uploadRouter } from './upload.routes.js';
import { commentRouter } from './comment.routes.js';
import { documentRouter } from './document.routes.js';

const masterRouter = Router();

masterRouter.use("/users", userRouter);
masterRouter.use("/auth", authRouter);
masterRouter.use("/uploads", uploadRouter);
masterRouter.use("/comments", commentRouter);
masterRouter.use("/documents", documentRouter);

export {masterRouter};
