import { Router } from "express";
import { userRouter } from "./user.routes.js";
import { authRouter } from "./auth.routes.js";
import { uploadRouter } from "./upload.routes.js";
import { commentRouter } from "./comment.routes.js";
import { documentRouter } from "./document.routes.js";

const v1Router = Router();

v1Router.use("/users", userRouter);
v1Router.use("/auth", authRouter);
v1Router.use("/uploads", uploadRouter);
v1Router.use("/comments", commentRouter);
v1Router.use("/documents", documentRouter);

export { v1Router };
