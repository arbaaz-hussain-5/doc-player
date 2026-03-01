import { Schema, model, Types } from "mongoose";
const CommentSchema = new Schema({
    commentMessage: { type: String, required: true },
    commentTo: { type: Types.ObjectId, required: true },
    commentedBy: { type: [Types.ObjectId] },
}, { timestamps: true });
const Comment = model("Comment", CommentSchema);
export { Comment };
//# sourceMappingURL=commment.model.js.map