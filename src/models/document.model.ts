import { Schema, model, Types } from "mongoose";

const DocumentSchema = new Schema(
  {
    documentName: { type: String, required: true },
    author: { type: String, required: true },
    documentLink: { type: String, required: true },
    genre: { type: [String], required: true },
    comments: { type: [Types.ObjectId] },
  },
  { timestamps: true },
);

const Document = model("Document", DocumentSchema);

export { Document };
