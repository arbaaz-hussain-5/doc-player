import { Comment } from '../models/commment.model.js';
async function findCommenetById(id, projectionObject = []) {
  return await Comment.findById(id, projectionObject).exec();
}
async function createComment(commentMessage, commentTo, commentedBy) {}
export { findCommenetById };
//# sourceMappingURL=comment.service.js.map
