import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { ErrorHanler } from "../middlewares/error-handllng.middleware.js";



const authRouter = express.Router();

authRouter.post("/sign-up",AuthController.signUpTheUser,ErrorHanler);
authRouter.post("/sign-in", AuthController.signInTheUser);


export { authRouter };
