import { RootError } from "./RootError.error.js";

class DocumentError extends RootError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7862;
    this.cause = cause;
  }
}

class DocumentNotFoundError extends DocumentError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7862;
    this.cause = cause;
  }
}

export { DocumentNotFoundError };
