import { RootError } from "./RootError.error.js";

class DatabaseMongooseError extends RootError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7860;
    this.cause = cause;
  }
}

export { DatabaseMongooseError };
