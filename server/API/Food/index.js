//Libraries
import express from "express";

//Database Model
import { FoodModel } from "../../database/allModel";

const Router = express.Router();

/*
Route       food/r/:_id
Des         get all food based on particular restaurants
Params      none
Access      Public
Method      GET    
*/
Router.get("/r/:id", async (req, res) => {
  try {
    const { _id } = req.params;

    const food = await FoodModel.find({ restaurant: _id });

    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       food/c/category
Des         get all food based on particular category
Params      category
Access      Public
Method      GET    
*/
Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const food = await FoodModel.find({
      category: { $regex: category, $option: "i" },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
