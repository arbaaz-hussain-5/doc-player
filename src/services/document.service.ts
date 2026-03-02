import mongoose from "mongoose";
import { Document } from "../models/document.model.js";
import { User } from "../models/user.model.js";
import { deleteTheComment } from "./comment.service.js";
import { DocumentNotFoundError } from "../errors/Document.error.js";
import { UserNotFoundError } from "../errors/user.error.js";
import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";

async function getTheDocument(
  id: string,
  projectionObject: [string] | [] = [],
) {
  try {
    const targetDocument = await Document.findById(id, projectionObject).exec();
    if (!targetDocument) throw new DocumentNotFoundError("no document");
    return targetDocument;
  } catch (err) {
    throw new DatabaseMongooseError("mongoose error", err);
  }
}

async function addTheDocument(
  documentName: string,
  author: string,
  documentLink: string,
  genre: string[],
): Promise<boolean> {
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const [newDocument] = await Document.create(
        [
          {
            documentName,
            author,
            documentLink,
            genre,
          },
        ],
        { session },
      );
      const targetUser = await User.findOneAndUpdate(
        {
          userId: newDocument.author,
        },
        { $addToSet: { document: newDocument.id } },
        { returnDocument: "after", upsert: false, session: session },
      ).exec();
      if (!targetUser) throw new UserNotFoundError("No user");
    });
    session.endSession();
    return true;
  } catch (err) {
    session.endSession();
    throw new DatabaseMongooseError("mongoose error", err);
  }
}

async function deleteTheDocument(documentId: string): Promise<boolean> {
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const documentToBeDeleted = await Document.findById(documentId).exec();
      if (!documentToBeDeleted) throw new DocumentNotFoundError("No Document");
      await User.findOneAndUpdate(
        { userId: documentToBeDeleted.author },
        { $pull: { document: documentToBeDeleted.id } },
        { returnDocument: "after", upsert: false, session: session },
      );
      const commentsOfDocument = documentToBeDeleted.comments;
      for (const x of commentsOfDocument) {
        await deleteTheComment(x + "");
      }
      const targetDocument = await Document.findOneAndDelete(
        documentToBeDeleted._id,
        { session: session },
      );
      if (!targetDocument) throw new DocumentNotFoundError("No Document");
    });
    session.endSession();
    return true;
  } catch (err) {
    session.endSession();
    throw new DatabaseMongooseError("mongoose error", err);
  }
}

export { addTheDocument, getTheDocument, deleteTheDocument };
