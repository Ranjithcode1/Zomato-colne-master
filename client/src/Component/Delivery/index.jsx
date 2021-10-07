import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";
import DeliveryCrousel from "./DeliveryCrousel";

function Delivery() {
  const [restaurantList, setrestaurantList] = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
      averageCost: 250,
    },
    {
      _id: "123342",
      photos: [
        "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: true,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
      averageCost: 250,
    },
    {
      _id: "1233423",
      photos: [
        "https://b.zmtcdn.com/data/pictures/5/19770655/f5571d6126f15f4499f2f46c9288627c_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Bakehouse Comfort",
      cuisine: ["Bakery", "Desserts", "Fast Food"],
      isPro: true,
      isOff: false,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
      averageCost: 250,
    },
  ]);
  return (
    <>
      <div className='bg-gray-50 px-8 md:px-0 py-10' >
        <DeliveryCrousel />
      </div>
      <div className="flex justify-between flex-wrap lg:px-20">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
