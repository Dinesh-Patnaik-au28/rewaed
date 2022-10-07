import React from "react";
import Coffee2 from "./asets/coffee2.jpeg";
function Hero2() {
  return (
    <>
      <div>
        <section class="px-3 py-5 bg-neutral-100 mt-14 lg:py-10">
          <div class="grid lg:grid-cols-2 items-center  gap-4">
            <div class="order-1 lg:order-1">
              <img class="h-96 object-cover " src={Coffee2} alt=""></img>
            </div>
            <div class="order-2 lg:order-2  flex flex-col  ">
              <p class="text-4xl flex font-light gap-2 text-black">
                Join
                <p class="text-4xl font-bold text-[#C10031]">Cafe Coffee Day</p>
              </p>
              <p class="text-4xl  flex font-light gap-2 ">
                Reward Club
                <p class="text-4xl  font-bold  text-[#C10031]"> & Get 100</p>
              </p>
              <p class="text-4xl  font-light ">Voucher On Your Next Order</p>
              <p class="mt-2 flex gap-2  text-1x1  ">
                And Get
                <p class=" font-bold  text-[#C10031]">
                  Rewards On Your All Purchases!!
                </p>
              </p>
              <button class="text-lg bg-black text-white py-2 px-5 mt-10 w-2/6 rounded-md hover:bg-zinc-800">
                SIGN UP NOW
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero2;
