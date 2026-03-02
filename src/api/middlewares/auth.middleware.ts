import { Request, Response } from "express";
import { verifyAuthentication } from "../../utils/auth.util.js";
import { TokenNotFoundError } from "../../errors/auth.error.js";
import { ErrorHanler } from "./error-handllng.middleware.js";

function Authentication(req: Request, res: Response, next: Function) {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new TokenNotFoundError("no token");
    }
    const authenticationResult = verifyAuthentication(token);
    req.userId = authenticationResult.userId;
    next();
  } catch (err) {
    next(err);
  }
}

export { Authentication };
