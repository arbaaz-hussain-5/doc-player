import { Response, Request } from "express";

async function ErrorHanler(err: any, req: Request, res: Response, next:Function) {
  switch (err.name) {
    case "UserAlreadyExistError":
      res.send("User Already Exist");
      break;
    case "TokenNotFoundError":
      res.send("Login please");
      break;
    case "AuthenticationFailedError":
      res.send("You are Not Authorized");
      break;

    case "PasswordMisMatchError":
      res.send("Incorrect Password");
      break;
    default:
      res.send(err);
  }
}
export { ErrorHanler };
