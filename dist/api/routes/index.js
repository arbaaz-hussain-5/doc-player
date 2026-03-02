import { Router } from "express";
import { userRouter } from "./user.routes.js";
import { authRouter } from "./auth.routes.js";
import { uploadRouter } from "./upload.routes.js";
const masterRouter = Router();
masterRouter.use("/users", userRouter);
masterRouter.use("/auth", authRouter);
masterRouter.use("/uploads", uploadRouter);
export { masterRouter };
//# sourceMappingURL=index.js.map
