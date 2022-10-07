import React from "react";

function Hero3() {
  return (
    <>
      <div class="h-72 w-100% bg-[#FAF7EA]">
        <p class="pt-6 px-8 text-center text-2xl font-bold text-lg">
          Your Benefits
        </p>
        <p class="text-center gap-2 font-bold">
          And get Exciting
          <span class="text-center text-[#C10031]">
            {" "}
            rewards on your all Purchases!!
          </span>
        </p>
        <div class="flex items-center justify-center gap-12 mt-10">
          <div class="w-100% flex flex-col items-center justify-center bg-[#FAC8D4]">
            <p className="text-sm">Welcome Back Vouchers</p>
            <p class="font-bold text-xl text-[#000000]">50% Off</p>
            <p>Redeem Now</p>
          </div>
          <div class="w-100% flex flex-col items-center justify-center bg-[#D4EDCF]">
            <p className="text-sm">Welcome Back Vouchers</p>
            <p class="font-bold text-xl text-[#000000]">12$ Off</p>
            <p>Redeem Now</p>
          </div>
          <div class="w-100% flex flex-col items-center justify-center bg-[#EDE8D2]">
            <p className="text-sm">Welcome Back Vouchers</p>
            <p class="font-bold text-xl text-[#000000]">20% Off</p>
            <p>Redeem Now</p>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <button class="text-center border-2 border-slate-700 px-8 py-2 border-solid">
            VIEW ALL
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero3;
