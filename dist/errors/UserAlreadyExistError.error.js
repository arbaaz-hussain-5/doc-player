import { RootError } from "./RootError.error.js";
class UserAlreadyExistError extends RootError {
  code;
  constructor(message) {
    super(message);
    this.code = 7862;
  }
}
export { UserAlreadyExistError };
//# sourceMappingURL=UserAlreadyExistError.error.js.map
