import mongoose, { mongo } from "mongoose";

const ResturantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    resturantTiming: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
    menu: {
      type: mongoose.Types.ObjectId,
      ref: "Menus",
    },
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
  },
  {
    timestamps: true,
  }
);

export const ResturantModel = mongoose.model("Resturants", ResturantSchema);
