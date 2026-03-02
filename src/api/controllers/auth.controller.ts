import { makeNewAccount } from "../../services/auth.service.js";
import { Response, Request, Application } from "express";
import { verifyTheSignIn } from "../../services/auth.service.js";

const AuthController = {
  signUpTheUser: async function (req: Request, res: Response, next: Function) {
    try {
      await makeNewAccount(req.body.userId, req.body.password, req.body.email);
      res.send("ok");
    } catch (err) {
      next(err);
    }
  },

  signInTheUser: async function (req: Request, res: Response, next: Function) {
    try {
      res.cookie(
        "token",
        await verifyTheSignIn(req.body.userId, req.body.password),
        {
          httpOnly: true,
          secure: false,
        },
      );
      res.send("ok");
    } catch (err) {
      next(err);
    }
  },
};

export { AuthController };
