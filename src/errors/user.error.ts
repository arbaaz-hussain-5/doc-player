import { RootError } from "./RootError.error.js";


class UserError extends RootError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7862;
    this.cause = cause;
  }
}

class UserAlreadyExistError extends UserError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7862;
    this.cause = cause;
  }
}

class UserNotFoundError extends UserError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7861;
    this.cause = cause;
  }
}

export { UserAlreadyExistError, UserNotFoundError };
