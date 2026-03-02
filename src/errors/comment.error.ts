import { RootError } from './RootError.error.js';

class CommentError extends RootError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7862;
    this.cause = cause;
  }
}

class CommentNotFoundError extends CommentError {
  code: number;
  cause: any;
  constructor(message: string, cause: any = null) {
    super(message);
    this.code = 7862;
    this.cause = cause;
  }
}

export { CommentNotFoundError };
