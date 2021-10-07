import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

//Components
import { NextArrow, PrevArrow } from "../Component/CrouselArrow";
import MenuCollection from "../Component/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../Component/Restaurant/MenuSimilarRestaurantCard";
import ReviewCard from "../Component/Restaurant/ReviewCard";
import MapView from "../Component/Restaurant/MapView";

function Overview() {
  const { id } = useParams();

  const [menuImage, setMenuImages] = useState([
    "https://b.zmtcdn.com/data/menus/499/65499/cef7fb189e48df1a7397b7d075918adf.jpg",
    "https://b.zmtcdn.com/data/menus/499/65499/d20b5bbe36ae37e940ae5ee07201e03b.jpg",
    "https://b.zmtcdn.com/data/menus/499/65499/0aa68e49b1523c94e610fb9aeda32fde.jpg",
    "https://b.zmtcdn.com/data/menus/499/65499/0e147aeb6b49cf6f2b639472a6161e27.jpg",
  ]);
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

  const cuisines = ["South Indian", "North Indian", "Chinese"];

  const averageCost = 100;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const settings = {
    dots: true,
    Infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl ">
            About this Place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium my-2">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See All Menus <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="4 pages"
              image={menuImage}
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((data) => (
              <span className="border border-gray-600 text-zomato-400 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div className="my-4 ">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6> ${averageCost} for one order (approx.) </h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and service charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-xl font-medium"> Similar Restaurants </h4>
            <div className="px-4">
              <Slider {...settings}>
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/65223/d36d8bc0df8b6e287a5d9137e371c24c.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="Hot Chips"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/65223/d36d8bc0df8b6e287a5d9137e371c24c.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="Hot Chips"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/65223/d36d8bc0df8b6e287a5d9137e371c24c.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="Hot Chips"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/65223/d36d8bc0df8b6e287a5d9137e371c24c.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="Hot Chips"
                />
              </Slider>
            </div>
          </div>
          <div className="my-10 w-full md:hidden flex flex-col gap-4">
            <MapView
              title="Hotel Saravana Bhavan"
              phno="+911234567890"
              mapLocation={[13.076142932254648, 80.27094125054253]}
              address="831/181, Opposite Anna Statue, Anna Salai, Chennai"
            />
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              {" "}
              Rate your delivery experience{" "}
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#fff700"
            />
            <div className="my-4">
              <hr />
            </div>
            {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}
          </div>

        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-5 shadow-md flex-col gap-4"
        >
          <MapView
            title="Hotel Saravana Bhavan"
            phno="+911234567890"
            mapLocation={[13.076142932254648, 80.27094125054253]}
            address="831/181, Opposite Anna Statue, Anna Salai, Chennai"
          />
        </aside>
      </div>
    </>
  );
}

export default Overview;
