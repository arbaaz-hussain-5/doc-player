import { Schema, model, Types } from "mongoose";

const SummerySchema = new Schema(
  {
    summery: { type: String, required: true },
    summeryFor: { type: Types.Map, required: true },
  },
  { timestamps: true },
);

const Summery = model("Summery", SummerySchema);

export { Summery };
