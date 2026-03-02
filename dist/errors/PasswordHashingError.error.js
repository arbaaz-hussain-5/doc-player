import { RootError } from "./RootError.error.js";
class PasswordHashingError extends RootError {
  code;
  constructor(message) {
    super(message);
    this.code = 7863;
  }
}
export { PasswordHashingError };
//# sourceMappingURL=PasswordHashingError.error.js.map
