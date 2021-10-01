import React from "react";
import { useParams } from "react-router-dom";

//Component
import Brand from "../Component/Delivery/Brand";
import Delivery from "../Component/Delivery/index";
import Dining from "../Component/Dining/index";
import NightLife from "../Component/NightLife/index";
import Nutrition from "../Component/Nutrition/index";

function Home() {
  const { type } = useParams();
  return (
    <>
      <div className="my-5 pb-5">
        {type === "delivery" && <Brand />}
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining/> }
        {type === "night" && <NightLife/> }
        {type === "nutri" && <Nutrition/> }
      </div>
    </>
  );
}

export default Home;
