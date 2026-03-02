import { RootError } from './RootError.error.js';
class UserNotFoundError extends RootError {
  code;
  constructor(message) {
    super(message);
    this.code = 7861;
  }
}
export { UserNotFoundError };
//# sourceMappingURL=UserNotFoundError.error.js.map
