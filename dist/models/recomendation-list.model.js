import { Schema, model, Types } from 'mongoose';
const RecommendationListSchema = new Schema(
  {
    recommendationList: { type: [Types.ObjectId], required: true },
    recommendedTo: { type: Types.ObjectId, required: true }
  },
  { timestamps: true }
);
const RecommendationList = model('Recommended', RecommendationListSchema);
export { RecommendationList };
//# sourceMappingURL=recomendation-list.model.js.map
