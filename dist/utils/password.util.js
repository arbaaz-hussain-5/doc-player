import { compare, hash } from 'bcrypt-ts';
import { PasswordHashingError } from '../errors/PasswordHashingError.error.js';
async function checkThePassword(password, hashedPassword) {
  try {
    return await compare(password, hashedPassword);
  } catch (err) {
    throw new PasswordHashingError('hashed password comapring failed');
  }
}
async function hashThePassword(password) {
  try {
    return await hash(password, 10);
  } catch (err) {
    throw new PasswordHashingError('hashing failed');
  }
}
export { hashThePassword, checkThePassword };
//# sourceMappingURL=password.util.js.map
