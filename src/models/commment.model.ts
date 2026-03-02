import { truncate } from "fs";
import { Schema, model, Types } from "mongoose";

const CommentSchema = new Schema(
  {
    commentMessage: { type: String, required: true },
    commentTo: { type: Types.ObjectId, required: true },
    commentBy: { type: Types.ObjectId, required: true },
    replyComments: [Types.ObjectId],
  },
  { timestamps: true },
);

const Comment = model("Comment", CommentSchema);

export { Comment };
