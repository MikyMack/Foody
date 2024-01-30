import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import salad from "../../assets/salad.png";
import salad2 from "../../assets/veg_salad.png";
import salad3 from "../../assets/egg_salad.png";

const BodyDiv3 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start mt-20 mb-5">
      <h1 className="text-red-500 text-2xl font-medium m-5">SPECIAL DISHES</h1>
      <h1 className="text-6xl font-bold m-2">Standout Dishes</h1>
      <h1 className="text-6xl font-bold mt-2 mb-10">From Our Menu</h1>
      <div className="relative w-full">
        <div className="w-full flex ">
          <div className="relative bg-white w-1/3 h-96 m-5 rounded-2xl drop-shadow-md p-10 cursor-pointer">
            <div className="absolute top-0 right-0 bg-[#39DB4A] w-12 h-12 rounded-es-2xl rounded-se-2xl text-white flex justify-center items-center">
              <AiFillHeart className="text-2xl" />
            </div>
            <div className="w-full flex justify-center items-center">
              <img src={salad} alt="salad" className="w-60" />
            </div>
            <h1 className="text-2xl font-semibold">Fattoush salad</h1>
            <h1 className="text-slate-600 text-lg font-medium">
              Description of the item
            </h1>
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium">
                <span className="text-red-500 text-base">$</span>24.00
              </p>
              <p className="text-xl text-slate-600 font-bold">
                <span className="text-yellow-300">★</span>4.9
              </p>
            </div>
          </div>
          <div className="relative bg-white w-1/3 h-96 m-5 rounded-2xl drop-shadow-md p-10 cursor-pointer">
            <div className="absolute top-0 right-0 bg-[#39DB4A] w-12 h-12 rounded-es-2xl rounded-se-2xl text-white flex justify-center items-center">
              <AiOutlineHeart className="text-2xl" />
            </div>
            <div className="w-full flex justify-center items-center">
              <img src={salad2} alt="salad" className="w-60" />
            </div>
            <h1 className="text-2xl font-semibold">Fattoush salad</h1>
            <h1 className="text-slate-600 text-lg font-medium">
              Description of the item
            </h1>
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium">
                <span className="text-red-500 text-base">$</span>24.00
              </p>
              <p className="text-xl text-slate-600 font-bold">
                <span className="text-yellow-300">★</span>4.9
              </p>
            </div>
          </div>
          <div className="relative bg-white w-1/3 h-96 m-5 rounded-2xl drop-shadow-md p-10 cursor-pointer">
            <div className="absolute top-0 right-0 bg-[#39DB4A] w-12 h-12 rounded-es-2xl rounded-se-2xl text-white flex justify-center items-center">
              <AiOutlineHeart className="text-2xl" />
            </div>
            <div className="w-full flex justify-center items-center">
              <img src={salad3} alt="salad" className="w-60" />
            </div>
            <h1 className="text-2xl font-semibold">Fattoush salad</h1>
            <h1 className="text-slate-600 text-lg font-medium">
              Description of the item
            </h1>
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium">
                <span className="text-red-500 text-base">$</span>24.00
              </p>
              <p className="text-xl text-slate-600 font-bold">
                <span className="text-yellow-300">★</span>4.9
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex -top-16 right-3">
          <div className="m-2 w-16 h-16 bg-slate-200 rounded-full flex justify-center items-center">
            <IoIosArrowBack className="text-2xl text-slate-600 font-semibold" />
          </div>
          <div className="m-2 w-16 h-16 bg-green-400 rounded-full flex justify-center items-center">
            <IoIosArrowForward className="text-2xl text-white font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDiv3;
