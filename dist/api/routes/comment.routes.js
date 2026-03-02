import express from "express";
const commentRouter = express.Router();
commentRouter.get("/", (req, res) => {
  res.send("Users home page");
});
commentRouter.post("/");
export { commentRouter };
//# sourceMappingURL=comment.routes.js.map
