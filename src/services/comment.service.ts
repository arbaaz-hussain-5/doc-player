import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
import { Comment } from "../models/commment.model.js";
import { Document } from "../models/document.model.js";
import { CommentNotFoundError } from "../errors/comment.error.js";
import { DocumentNotFoundError } from "../errors/Document.error.js";
import mongoose from "mongoose";

async function doTheComment(
  commentMessage: string,
  commentTo: string,
  commentBy: string,
): Promise<true> {
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const [newComment] = await Comment.create(
        [
          {
            commentMessage,
            commentTo,
            commentBy,
          },
        ],
        { session: session },
      );
      const targetDocument = await Document.findByIdAndUpdate(
        newComment.commentTo,
        { $addToSet: { comments: newComment.id } },
        { returnDocument: "after", upsert: false, session: session },
      ).exec();
      if (!targetDocument) throw new DocumentNotFoundError("No Document");
    });
    session.endSession();
    return true;
  } catch (err) {
    session.endSession();
    throw new DatabaseMongooseError("Mongoos erooor", err);
  }
}

async function deleteTheComment(commentId: string): Promise<true> {
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const commentToBeDeleted = await Comment.findOne(
        { _id: commentId },
        {},
        { session: session },
      ).exec();
      if (!commentToBeDeleted) throw new CommentNotFoundError("No Comment");
      await Document.findOneAndUpdate(
        { _id: commentToBeDeleted.commentTo },
        { $pull: { comments: commentToBeDeleted.id } },
        { returnDocument: "after", upsert: false, session: session },
      ).exec();
      const replyOfComments = commentToBeDeleted.replyComments;
      for (const x of replyOfComments) {
        await deleteTheReply(x + "");
      }
      await Comment.findByIdAndDelete(commentToBeDeleted.id, {
        session: session,
      }).exec();
    });
    session.endSession();
    return true;
  } catch (err) {
    session.endSession();
    throw new DatabaseMongooseError("Mongoos error", err);
  }
}

async function replyToComment(
  commentMessage: string,
  commentTo: string,
  commentBy: string,
): Promise<true> {
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const [newComment] = await Comment.create(
        [
          {
            commentMessage,
            commentTo,
            commentBy,
          },
        ],
        { session: session },
      );
      const targetComment = await Comment.findByIdAndUpdate(
        newComment.commentTo,
        { $addToSet: { replyComments: newComment.id } },
        { returnDocument: "after", upsert: false, session: session },
      ).exec();
      if (!targetComment) throw new CommentNotFoundError("No Comment");
    });
    session.endSession();
    return true;
  } catch (err) {
    session.endSession();
    throw new DatabaseMongooseError("Mongoos erooor", err);
  }
}

async function deleteTheReply(commentId: string): Promise<true> {
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const commentToBeDeleted = await Comment.findOne(
        { _id: commentId },
        {},
        { session: session },
      ).exec();
      if (!commentToBeDeleted) throw new CommentNotFoundError("No Comments");
      await Comment.findOneAndUpdate(
        { _id: commentToBeDeleted?.commentTo },
        { $pull: { replyToComment: commentToBeDeleted.id } },
        { returnDocument: "after", upsert: false, session: session },
      ).exec();
      await Comment.deleteOne(
        { id: commentToBeDeleted.id },
        { session: session },
      ).exec();
      const replyOfreply = commentToBeDeleted.replyComments;
      for (const x of replyOfreply) {
        await deleteTheReply(x + "");
      }
    });
    session.endSession();
    return true;
  } catch (err) {
    session.endSession();
    throw new DatabaseMongooseError("Mongoos error", err);
  }
}

async function listTheComment(documentId: string): Promise<any> {
  try {
    const targetDocument = await Document.findById(
      documentId,
      "comments",
    ).exec();
    if (!targetDocument) throw new DocumentNotFoundError("No Document");
    return targetDocument.comments;
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos error", err);
  }
}

async function listTheReply(commentId: string): Promise<any> {
  try {
    const targetComment = await Comment.findById(
      commentId,
      " replyComments",
    ).exec();
    if (!targetComment) throw new CommentNotFoundError("no comment");
    return targetComment.replyComments;
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos error", err);
  }
}

async function editTheComment(
  commentId: string,
  newMessage: string,
): Promise<boolean> {
  try {
    const targetComment = await Comment.findByIdAndUpdate(commentId, {
      commentMessage: newMessage,
    }).exec();
    if (!targetComment) throw new CommentNotFoundError("no comment");
    return true;
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos error", err);
  }
}

async function editTheReply(commentId: string, replyMessage: string) {
  try {
    const targetComment = await Comment.findByIdAndUpdate(commentId, {
      commentMessage: replyMessage,
    }).exec();
    if (!targetComment) throw new CommentNotFoundError("no comment");
    return true;
  } catch (err) {
    throw new DatabaseMongooseError("Mongoos error", err);
  }
}

export {
  doTheComment,
  deleteTheComment,
  replyToComment,
  deleteTheReply,
  listTheReply,
  listTheComment,
  editTheComment,
  editTheReply,
};
