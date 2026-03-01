import { RootError } from "./RootError.error.js";

class AuthError extends RootError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7863;
    this.cause = cause;
  }
}

class PasswordHashingError extends AuthError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7863;
    this.cause = cause;
  }
}

class TokenNotFoundError extends AuthError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7863;
    this.cause = cause;
  }
}



class AuthenticationFailedError extends AuthError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7869;
    this.cause = cause;
  }
}


class PasswordMisMatchError extends AuthError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7869;
    this.cause = cause;
  }
}


class AuthTokenCreationFailedError extends AuthError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7869;
    this.cause = cause;
  }
}

export { PasswordHashingError,TokenNotFoundError, AuthenticationFailedError, PasswordMisMatchError, AuthTokenCreationFailedError };
