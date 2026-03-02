import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    document: { type: [{ type: Types.ObjectId }] }
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export { User };
