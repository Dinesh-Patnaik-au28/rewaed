import React from "react";
import logo from "./asets/logo.svg";
import { UserCircle, ShoppingBag, ChevronDown } from "heroicons-react";
function Navbar() {
  return (
    <div className="fixed top-2.5 left-2.5 right-2.5 bg-[#F7F9FB] w-auto h-20 rounded-lg flex justify-between items-center">
      <div className=" ml-7">
        <img src={logo} alt="logo" className="w-11 h-16"></img>
      </div>
      <div className="flex mr-7 text-black">
        <div className="flex gap-10 pr-10">
          <a href="#">Order Now</a>
          <a href="#">Rewards</a>
          <a href="#">Gifting</a>
          <a href="#">All Stores</a>
        </div>
        <div className="flex gap-3">
          <UserCircle />
          <ShoppingBag />
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
