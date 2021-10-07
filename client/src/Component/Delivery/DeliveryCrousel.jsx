import React from "react";
import Slider from "react-slick";

//Sliders Arrows
import { NextArrow, PrevArrow } from "../CrouselArrow";
import DeliveryCategory from "./DeliveryCategory";

function DeliveryCrousel() {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
      title: "Kesari Bath",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
      title: "Sagu",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <>
        <h1 className="text-xl lg:text-3xl mb-4 text-gray-800 lg:px-12 font-bold ">
          Inspiration for your first order
        </h1>
        <div className="lg:hidden flex gap-3 flex-wrap justify-between">
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </div>

        <div className="hidden lg:block px-12 my-8">
          <Slider {...settings}>
            {categories.map((food) => (
              <DeliveryCategory {...food} />
            ))}
          </Slider>
        </div>
    </>
  );
}

export default DeliveryCrousel;
