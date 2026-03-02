import express from 'express';
import { AuthController } from '../controllers/auth.controller.js';
const authRouter = express.Router();
authRouter.post('/sign-up', AuthController.signUpTheUser);
authRouter.post('/sign-in', AuthController.signInTheUser);
export { authRouter };
//# sourceMappingURL=auth.routes.js.map
