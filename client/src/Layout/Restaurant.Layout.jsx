//Libraries
import React, { useState } from "react";

//components
import RestaurantNavbar from "../Component/Navbar/RestaurantNavbar";
import ImageGrid from "../Component/Restaurant/ImageGrid";
import RestaurantInfo from "../Component/Restaurant/RestaurantInfo";
import InfoButton from "../Component/Restaurant/InfoButton";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import Tabs from "../Component/Restaurant/Tabs";
import CartContainer from "../Component/Cart/CartContainer";

function RestaurantLayout({ children }) {
  const [restaurant, setRestaurant] = useState({
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/8/66398/f4017dc81e0a2522c25ebd9d767ac335_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/9/72529/1723df15f42d077a8e9d566e0081d828.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/9/72529/6595eaa3c984f6caacb20942f83f00ca.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/9/72529/860c63bacf1b14ac422568d70103f399.jpg?output-format=webp&fit=around|960:500&crop=960:500;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/9/72529/3a7f64759fbc94ce74995c35cac3c7e3.jpg?output-format=webp&fit=around|960:500&crop=960:500;*,*",
    ],
    name: "Hotel Saravana Bhavan",
    cuisine: "South Indian, North Indian, Chinese",
    address: "Egmore, Chennai",
    restaurantRating: "4.4",
    deliveryRating: "3.5",
  });
  return (
    <>
      <RestaurantNavbar />
      <div className=" container mx-auto px-4 lg:px-32 pb-10 my-6">
        <ImageGrid images={restaurant.images} />

        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="flex my-4 flex-wrap gap-3  text-xs font-bold md:text-base ">
          <InfoButton isActive>
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className='my-10' >
            <Tabs/>
        </div>
        {children}
     
      </div>
      <CartContainer/>
      
    </>
  );
}

export default RestaurantLayout;
