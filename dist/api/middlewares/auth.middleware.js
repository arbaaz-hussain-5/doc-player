import { verifyAuthentication } from '../../utils/auth.utils.js';
function Authentication(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.send('login plese');
    return;
  }
  const authenticationResult = verifyAuthentication(token);
  if (authenticationResult[0] && typeof authenticationResult[1] !== 'string') {
    req.userId = authenticationResult[1].userId;
    next();
  } else res.send('unAuthorized');
}
export { Authentication };
//# sourceMappingURL=auth.middleware.js.map
