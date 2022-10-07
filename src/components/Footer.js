import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "./asets/logo.svg";
import logo1 from "./asets/logo1.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#ECF0F4] h-1/2 w-full flex  md:flex-row flex-col justify-around items-start p-20">
        <div className="py-3">
          <img src={logo} alt="logo" className="w-20 h-30"></img>
        </div>
        <div>
          <ul>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Rewards
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              All Stores
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Offers
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms and Conditions
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Refund Policy
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About Us
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="text-gray-800 font-bold text-md pb-6">Follow us On</p>
            <div className="flex gap-6 pb-5">
              <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
            <img src={logo1} alt="logo" className="w-20 h-30"></img>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
