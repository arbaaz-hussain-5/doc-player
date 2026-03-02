import jwt from "jsonwebtoken";
import { UserObject } from "../interfaces/common.interface.js";
import { compare, hash } from "bcrypt-ts";
import {
  AuthenticationFailedError,
  PasswordHashingError,
} from "../errors/auth.error.js";
import { AuthTokenCreationFailedError } from "../errors/auth.error.js";

function createAutheticationToken(userobject: UserObject): string {
  try {
    const token = jwt.sign(userobject, "your-secret-key", {
      expiresIn: "1h",
    });
    return token;
  } catch (err) {
    throw new AuthTokenCreationFailedError("token creation failed", err);
  }
}

function verifyAuthentication(authenticationToken: string): jwt.JwtPayload {
  try {
    const decoded = jwt.verify(authenticationToken, "your-secret-key");
    if (typeof decoded !== "string") return decoded;
    throw new AuthenticationFailedError("failed");
  } catch (err) {
    throw err;
  }
}

async function checkThePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  try {
    return await compare(password, hashedPassword);
  } catch (err) {
    throw new PasswordHashingError("hashed password comapring failed", err);
  }
}

async function hashThePassword(password: string): Promise<string> {
  try {
    return await hash(password, 10);
  } catch (err) {
    throw new PasswordHashingError("hashing failed", err);
  }
}

export {
  verifyAuthentication,
  createAutheticationToken,
  hashThePassword,
  checkThePassword,
};
