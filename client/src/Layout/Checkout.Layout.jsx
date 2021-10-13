import React from "react";
import CheckoutNavbar from "../Component/Navbar/CheckoutNavbar";

//components

function CheckoutLayout(props) {
  return (
    <>
      <CheckoutNavbar />
      <div className=" container mx-auto px-4 lg:px-20">{props.children}</div>
    </>
  );
}

export default CheckoutLayout;
