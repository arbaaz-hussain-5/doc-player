import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
import { UserNotFoundError } from "../errors/UserNotFoundError.error.js";
import { User } from "../models/user.model.js";
import { hashThePassword } from "../utils/password.util.js";
import { addUser } from "./user.service.js";
import { PasswordHashingError } from "../errors/PasswordHashingError.error.js";
import { UserAlreadyExistError } from "../errors/UserAlreadyExistError.error.js";
import { checkThePassword } from "../utils/password.util.js";
import { createAutheticationToken } from "../utils/auth.utils.js";
async function getHashedPassword(userId) {
    try {
        const person = await User.findOne({ userId: userId }).select("password").exec();
        if (person)
            return person.password;
        throw new UserNotFoundError("user not found");
    }
    catch (err) {
        if (err instanceof UserNotFoundError)
            throw err;
        throw new DatabaseMongooseError("database error");
    }
}
async function makeNewAccount(userId, password, email) {
    try {
        const hashedPassword = await hashThePassword(password);
        await addUser(userId, hashedPassword, email);
        return "success";
    }
    catch (err) {
        if (err instanceof PasswordHashingError)
            return "internalServerError";
        if (err instanceof UserAlreadyExistError)
            return "userIdAlreadyExist";
        return "internalServerError";
    }
}
async function verifyTheSignIn(userId, password) {
    try {
        const hassedPassword = await getHashedPassword(userId);
        const isMatch = await checkThePassword(password, hassedPassword);
        if (isMatch)
            return [isMatch, createAutheticationToken({ userId: userId })];
        return [isMatch, "password missmatch"];
    }
    catch {
        return "internalServerError";
    }
}
export { makeNewAccount, getHashedPassword, verifyTheSignIn };
//# sourceMappingURL=auth.service.js.map