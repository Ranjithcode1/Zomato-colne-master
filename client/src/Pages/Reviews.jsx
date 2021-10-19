import React, { useState } from "react";
import ReviewCard from "../Component/Restaurant/ReviewCard";
import AddReviewcard from "../Component/Restaurant/Reviews/AddReviewcard";

function Reviews() {
  const [Reviews, setReviews] = useState([
    {
      userName: "Ranjith",
      isRestaurantReview: true,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Dinesh",
      isRestaurantReview: true,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Chandru",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Abishek",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Vijay",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Saravana",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
  ]);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden">
            <AddReviewcard />
          </div>
          {Reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-3"
        >
          <AddReviewcard />
        </aside>
      </div>
    </>
  );
}

export default Reviews;
