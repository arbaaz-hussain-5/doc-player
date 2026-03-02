import { RootError } from "./RootError.error.js";
class DatabaseMongooseError extends RootError {
  code;
  constructor(message) {
    super(message);
    this.code = 7860;
  }
}
export { DatabaseMongooseError };
//# sourceMappingURL=DatabaseMongooseError.error.js.map
