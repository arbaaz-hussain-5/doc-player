import express from "express";
import { UserController } from "../controllers/user.controller.js";
import { Authentication } from "../middlewares/auth.middleware.js";
const userRouter = express.Router();
userRouter.use(Authentication);
userRouter.get("/", UserController.getUserById);
export { userRouter };
//# sourceMappingURL=user.routes.js.map
