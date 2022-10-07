import React from "react";

function Cards() {
  return (
    <>
      <div>
        <section className="md:h-full flex items-center text-gray-600">
          <div className="container px-14 py-11 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-2xl font-bold text-black mb-1">
                Tiers & benefits of each programme
              </h1>
              <h4 className="text-black-200 font-semibold">loren impusn</h4>
            </div>
            <div className="flex  m-4">
              <div className="p-4 w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg bg-[#7CCCB1] overflow-hidden">
                  <div className="p-6 h-32 bg-gradient-to-r from-[#7CCCB1] to-[#26B383]">
                    <h1 className="text-base font medium text black-300 mb-1">
                      <span className="font-bold text-xl text-black">
                        Regular
                      </span>{" "}
                      Cards
                      <br></br>
                      <span className="font-bold text-sm text-black">
                        Free sign-up and get limited benefits
                      </span>
                    </h1>
                  </div>
                  <div className="h-full bg-[#EAF5E7] ">
                    <ul className="leading-10 pl-6">
                      Rewarding 10% points on customer spend
                    </ul>
                    <ul className="leading-10 pl-6">
                      Birtday gift voucher wort 10$
                    </ul>
                    <ul className="leading-10 pl-6">
                      Eran points & Get amazing freebies
                    </ul>
                    <ul className="leading-10 pl-6">
                      Points can be transferred to friends and family
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-4 w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-[#FDE297] to-[#D09B33]">
                    <h1 className="text-base font medium text black-300 mb-1">
                      <span className="font-bold text-xl text-black">Gold</span>{" "}
                      Cards
                      <br></br>
                      <span className="font-bold text-sm text-black">
                        Make 10 over visits to become a Gold Card Member
                      </span>
                    </h1>
                  </div>
                  <div className="h-80 bg-[#FAF7EA]">
                    <ol className="leading-10 pl-6">
                      <li>Rewarding 15% points on customer spend</li>
                      <li>Birtday gift voucher wort 20$</li>
                      <li>
                        Get Amazing Surprise discount up to 500$ accross the
                        year
                      </li>
                      <li>Access to the new products on the discount</li>
                      <li>Points can be transferred to friends and family</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="p-4 w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-[#E7E9EB] to-[#9C9DA1]">
                    <h1 className="text-base font medium text black-300 mb-1">
                      <span className="font-bold text-xl text-black">
                        Platinum
                      </span>{" "}
                      Cards
                      <br></br>
                      <span className="font-bold text-sm text-black">
                        Make over 20 visits to become a Platinum Mamber
                      </span>
                    </h1>
                  </div>
                  <div className="h-80 bg-[#F5F5F5]">
                    <ul className="leading-10 pl-6">
                      Rewarding 20% points on customer spend
                    </ul>
                    <ul className="leading-10 pl-6">
                      Birtday gift voucher wort 50$
                    </ul>
                    <ul className="leading-10 pl-6">
                      Get Amazing Surprise discount up to 1000$ accross the year
                    </ul>
                    <ul className="leading-10 pl-6">
                      Access to the new products on the discount
                    </ul>
                    <ul className="leading-10 pl-6">
                      Points can be transferred to friends and family
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cards;
