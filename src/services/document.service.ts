import { Document } from "../models/document.model.js";
import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
import { User } from "../models/user.model.js";

async function findDocumentById(id: string, projectionObject: [string] | [] = []) {
  return await Document.findById(id, projectionObject).exec();
}

async function addDocument(documentName: string, author: string, documentLink: string, genre: string[]): Promise<true> {
  try {
    const newDocument = await new Document({
      documentName: documentName,
      author: author,
      documentLink: documentLink,
      genre: genre,
    }).save();

    await User.findOneAndUpdate(
      {
        userId: newDocument.author,
      },
      { $addToSet: { document: newDocument.id } },
      { returnDocument: "after", upsert: false }
    ).exec();
    return true;
  } catch (err) {
    throw new DatabaseMongooseError("database error", err);
  }
}

export { findDocumentById, addDocument };
