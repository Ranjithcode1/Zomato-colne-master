import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiTwotoneStar } from "react-icons/ai";

function RestaurantCard(props) {
  const [ispro] = useState(false);
  const [isoff] = useState(true);

  return (
    <Link to={`/restaurant/123456`} className="w-full md:w-1/2 lg:w-1/3 flex justify-center my-4">
      <div className="bg-white p-3 mb-4 rounded-2xl transition duration-300 ease-in-out hover:shadow-lg " style={{ maxWidth:"24rem" }}>
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex items-start flex-col gap-2">
              {props.ispro && (
                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                  pro extra 10% off
                </span>
              )}
              {props.isoff && (
                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                  $20 OFF
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 px-2 py-1 rounded mr-3 text-xs font-semibold">
              {props.durationOfDelivery} min
            </span>
          </div>
          <img
            src="https://b.zmtcdn.com/data/pictures/6/92236/2ea1f93f2cc89b19ee4054ada1ae3c38_o2_featured_v2.jpg?output-format=webp"
            alt="food"
            className="w-full h-full rounded-2xl object-cover object-center "
          />
        </div>
        <div className='my-2 flex flex-col gap-2' >
            <div className='flex items-center justify-between' >
                <h4 className='text-xl font-medium' >Taj Mahal - Taj Mahal Hotel</h4>
                <span className='bg-green-500 text-sm p-1 rounded flex items-center'>
                    {props.restaurantReviewValue}<AiTwotoneStar/>
                </span>
            </div>
            <div className=' text-xs flex flex-row justify-between'>
                <p>{props.cuisine.join(", ")}</p>
                <p>${props.averageCost} for one</p>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
