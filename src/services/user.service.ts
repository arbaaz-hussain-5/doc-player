import { errorMonitor } from "events";
import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
import { UserAlreadyExistError } from "../errors/user.error.js";
import { User } from "../models/user.model.js";

async function findUserById(id: string, projectionObject: [string] | [] = []) {
  return await User.findById(id, projectionObject).exec();
}

async function addUser(userId: string, hashedPassword: string, email: string): Promise<true> {
  try {
    await new User({
      userId: userId,
      email: email,
      password: hashedPassword,
    }).save();
    return true;
  } catch (err) {
    if (err instanceof Object && "code" in err && err.code === 11000) throw new UserAlreadyExistError("user exist already", err);
    throw new DatabaseMongooseError("database error", err);
  }
}

export { addUser, findUserById };
