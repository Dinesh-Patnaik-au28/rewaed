import React from "react";
import Image1 from "./asets/Image1.png";
import Image2 from "./asets/Image2.png";

function Hero5() {
  return (
    <>
      <div className="md:h-full flex flex-col  items-center text-gray-600 bg-[#E7E9EB]">
        <div className="flex container flex-col px-7 justify-center items-center  pt-11 mx-auto">
          <p className="font-bold text-2xl text-black">Refer & Eran</p>
          <p className="font-bold text-sm text-black">Loream Ipsum</p>
        </div>
        <div className="flex gap-6 m-4">
          <div className="p-4 w-1/2 px-24 bg-[#F5F2E4]">
            <img className="pl-20" src={Image1}></img>
            <p className="text-center font-light text-xl text-black">
              What{" "}
              <span className="font-bold text-2xl text-black">You Get</span>
            </p>
            <ul>
              <li className="pt-4">
                When your friends signs up & makes a transaction you will get
                200 bouns Points
              </li>
              <li className="pt-4">
                For every 5 referrals, You will also stand a chance to win $10{" "}
                coupon
              </li>
            </ul>
          </div>
          <div className="p-4 w-1/2 px-24 bg-[#F5F2E4]">
            <img className="pl-20" src={Image2}></img>
            <p className="text-center font-light text-xl text-black">
              What Your{" "}
              <span className="font-bold text-2xl text-black">Friends Get</span>
            </p>
            <ul>
              <li className="pt-4">
                Get $10 off on your favorite dishes with your first order and
                avail your self of more rewards
              </li>
              <li className="pt-4">Loream Ipsum dolor sit amet, consetetur</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero5;
