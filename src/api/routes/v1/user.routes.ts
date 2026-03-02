import express from "express";
import { UserController } from "../../controllers/user.controller.js";
import { Authentication } from "../../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.use(Authentication);
userRouter.get("/get-user", UserController.getUserById);

export { userRouter };
