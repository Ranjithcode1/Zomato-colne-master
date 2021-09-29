import React from "react";
import FoodTab from "../Component/FoodTabs";

//Components
import Navbar from "../Component/Navbar"

function HomeLayout({children}) {
  return <div>
      <Navbar/>
      <FoodTab/>
      <div className='container mx-auto px-4 lg:px-20' >{children}</div>
  </div>;
}

export default HomeLayout;
