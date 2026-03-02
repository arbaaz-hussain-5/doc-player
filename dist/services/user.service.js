import { User } from '../models/user.model.js';
import { DatabaseMongooseError } from '../errors/DatabaseMongooseError.error.js';
import { UserAlreadyExistError } from '../errors/UserAlreadyExistError.error.js';
async function findUserById(id, projectionObject = []) {
  return await User.findById(id, projectionObject).exec();
}
async function addUser(userId, hashedPassword, email) {
  try {
    await new User({
      userId: userId,
      email: email,
      password: hashedPassword
    }).save();
    return true;
  } catch (err) {
    if (err instanceof Object && 'code' in err && err.code === 11000) throw new UserAlreadyExistError('user exist alradt');
    throw new DatabaseMongooseError('database error');
  }
}
export { addUser, findUserById };
//# sourceMappingURL=user.service.js.map
