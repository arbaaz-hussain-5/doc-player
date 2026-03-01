import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
import { Comment } from "../models/commment.model.js";
import { Document } from "../models/document.model.js";

async function findCommenetById(id: string, projectionObject: [string] | [] = []) {
  try {
    return await Comment.findById(id, projectionObject).exec();
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos erooor", err);
  }
}

async function createComment(commentMessage: string, commentTo: string, commentBy: string): Promise<true> {
  try {
    const newComment = await new Comment({ commentMessage: commentMessage, commentTo: commentTo, commentBy: commentBy }).save();
    await Document.findOneAndUpdate(
      {
        id: newComment.commentTo,
      },
      { $addToSet: { comments: newComment.id } },
      { returnDocument: "after", upsert: false }
    ).exec();
    return true;
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos erooor", err);
  }
}

async function deleteCommentById(commentId: string): Promise<true> {
  try {
    await Comment.deleteOne({ _id: commentId }).exec();
    return true;
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos erooor", err);
  }
}

export { findCommenetById, createComment, deleteCommentById };
