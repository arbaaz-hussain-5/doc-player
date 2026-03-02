import express from "express";
const documentRouter = express.Router();
documentRouter.get("/", (req, res) => {
  res.send("Users home page");
});
export { documentRouter };
//# sourceMappingURL=document.routes.js.map
