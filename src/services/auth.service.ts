import { PasswordMisMatchError } from "../errors/auth.error.js";
import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
import {UserNotFoundError } from "../errors/user.error.js";
import { User } from "../models/user.model.js";
import { createAutheticationToken } from "../utils/auth.util.js";
import { checkThePassword, hashThePassword } from "../utils/auth.util.js";
import { addUser } from "./user.service.js";

async function getHashedPassword(userId: string): Promise<string> {
  try {
    const person = await User.findOne({ userId: userId }).select("password").exec();
    if (person) return person.password;
    throw new UserNotFoundError("user not found");
  } catch (err) {
    if (err instanceof UserNotFoundError) throw err;
    throw new DatabaseMongooseError("database error", err);
  }
}

async function makeNewAccount(userId: string, password: string, email: string): Promise<true> {
  try {
    const hashedPassword = await hashThePassword(password);
    return await addUser(userId, hashedPassword, email);
  } catch (err) {
    throw err;
  }
}

async function verifyTheSignIn(userId: string, password: string): Promise<string> {
  try {
    const hassedPassword = await getHashedPassword(userId);
    const isMatch = await checkThePassword(password, hassedPassword);
    if (isMatch) return createAutheticationToken({ userId: userId });
    throw new PasswordMisMatchError("password does not match");
  } catch (err) {
    throw err;
  }
}

export { getHashedPassword, makeNewAccount, verifyTheSignIn };
