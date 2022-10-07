import React from "react";

function Hero() {
  return (
    <>
      <div>
        <div className="bg-[url('components/asets/coffe.jpg')] bg-cover h-[50rem] w-[80rem] flex flex-col justify-center">
          <p className="font-bold text-6xl text-white pl-14">
            A Lot <span className="font-light text-6xl text-white">Can</span>
          </p>
          <p className="font-light text-6xl text-white pl-14">
            Happen{" "}
            <span className="font-bold text-6xl text-white">Over A Coffee</span>
          </p>
          <p className="font-bold text-xm text-white pl-14 mt-3">
            Experience the deliciousness of your favourite CCD trats
          </p>
          <button class="text-lg bg-black text-white py-2 px-5 mt-4 w-44 ml-14 rounded-md hover:bg-zinc-800">
            SIGN UP NOW
          </button>
          <p className="font-bold text-xm text-white mt-2 pl-14">
            Sign up now and get 100 voucher
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
