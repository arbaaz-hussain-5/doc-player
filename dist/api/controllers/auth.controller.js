import { makeNewAccount } from "../../services/auth.service.js";
import { verifyTheSignIn } from "../../services/auth.service.js";
const AuthController = {
  signUpTheUser: async function (req, res) {
    const user = await makeNewAccount(
      req.body.userId,
      req.body.password,
      req.body.email,
    );
    res.send(user);
  },
  signInTheUser: async function (req, res) {
    const user = await verifyTheSignIn(req.body.userId, req.body.password);
    if (user[0])
      res.cookie("token", user[1], { httpOnly: true, secure: false });
    res.send(user);
  },
};
export { AuthController };
//# sourceMappingURL=auth.controller.js.map
