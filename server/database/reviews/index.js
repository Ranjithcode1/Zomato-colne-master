import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    resturants: { type: mongoose.Types.ObjectId, ref: "Resturants" },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isResturantReview: Boolean,
    isFoodReview: Boolean,
    photos: [
      {
        type: { type: mongoose.Types.ObjectId, ref: "Images" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);
