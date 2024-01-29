import React from "react";

import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

import img2 from "../../assets/logo2.png";

const footer = () => {
  return (
    <div className="bg-[#E3FFE6] w-full h-64 ">
      <div className="container md:max-w-screen-lg mx-auto w-full flex flex-col items-center justify-between h-full">
        <div className="flex justify-between items-center w-full h-full">
          <div className="w-1/4  h-full">
            <div className="flex flex-col justify-start items-start w-2/3 h-full pt-10">
              <img src={img2} alt="logo" className="h-8 mb-3" />
              <p>
                Savor the artistry where every dish is a culinary masterpiece
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start w-1/4 h-full pt-10">
            <h2 className="font-bold">Useful links</h2>
            <p>About us</p>
            <p>Events</p>
            <p>Blogs</p>
            <p>FAQ</p>
          </div>
          <div className="flex flex-col justify-between items-start w-1/4 h-full pt-10">
            <h2 className="font-bold">Main Menu</h2>
            <p>Home</p>
            <p>Offers</p>
            <p>Menus</p>
            <p>Reservation</p>
          </div>
          <div className="flex flex-col justify-between items-start w-1/4 h-full pt-10">
            <h2 className="font-bold">Contact Us</h2>
            <p>example@email.com</p>
            <p>+64 958 248 966</p>
            <p>Social media</p>
          </div>
        </div>
        <div className="bottom-0 right-0 flex justify-between items-center w-full m-5 ">
          <div className="flex justify-between w-1/5">
            <div className="w-7 h-7 bg-green-400 rounded-full text-white flex justify-center items-center">
              <FiFacebook />
            </div>
            <div className="w-7 h-7 bg-green-50 rounded-full text-black flex justify-center items-center">
              <FiInstagram />
            </div>
            <div className="w-7 h-7 bg-green-50 rounded-full text-black flex justify-center items-center">
              <FiTwitter />
            </div>
            <div className="w-7 h-7 bg-green-50 rounded-full text-black flex justify-center items-center">
              <AiOutlineYoutube />
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-sm">
            <p>Copyright © 2024 A2ZAlphabets | All rights reserved</p>
          </div>
          <div className="w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default footer;
