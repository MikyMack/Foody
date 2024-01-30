import React from "react";

import { BsPlayFill } from "react-icons/bs";

import img from "../../assets/food_deights.png";
import delight1 from "../../assets/delight1.png";
import delight2 from "../../assets/delight2.png";

const BodyDiv1 = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-1/2 flex flex-col justify-center ">
        <div className="w-full m-5">
          <h1 className="text-6xl font-extrabold">
            Dive into Delights <br /> Of Delectable{" "}
            <span className="text-green-400">Food</span>
          </h1>
        </div>
        <p className="m-5 text-xl font-medium text-neutral-700">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex justify-center items-center text-xl font-medium m-3">
          <div
            style={{ boxShadow: "0 0.5px 8px 0.3px lightGreen" }}
            className=" mx-3 flex justify-center items-center bg-green-400 rounded-full px-12 py-5 text-white drop-shadow-xl cursor-pointer"
          >
            <p>Order Now</p>
          </div>
          <div className=" mx-3 font-medium text-slate-600 ">
            <p>Watch Video</p>
          </div>
          <div className="w-1/3">
            <div className="mx-2 w-14 h-14 bg-white rounded-full flex justify-center items-center drop-shadow-lg cursor-pointer">
              <BsPlayFill className="m-1 text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex m-10">
        <div className="realtive w-full">
          <div className=" w-full">
            <img src={img} alt="delights" className="w-full" />
          </div>
          <div className="absolute top-60 p-2 bg-slate-50 rounded-full drop-shadow-md">
            <p className="text-lg text-red-500 font-semibold">
              Hot spicy Food 🌶
            </p>
          </div>
          <div className="absolute -bottom-10 p-2 flex w-56 bg-slate-50 drop-shadow-md rounded-xl">
            <div className="p-1">
              <img
                src={delight1}
                alt="delight"
                className="w-16 h-16 rounded-xl"
              />
            </div>
            <div className="p-1">
              <p className="font-medium">Spicy noodles</p>
              <p>
                <span className="text-yellow-300">★★★</span>☆☆
              </p>
              <p className="font-medium">
                <span className="text-red-500 text-xs">$</span>18.00
              </p>
            </div>
          </div>
          <div className="absolute right-60 -bottom-10 p-2 flex w-56 bg-slate-50 drop-shadow-md rounded-xl">
            <div className="p-1">
              <img
                src={delight2}
                alt="delight"
                className="w-16 h-16 rounded-xl"
              />
            </div>
            <div className="p-1">
              <p className="font-medium">Vegetarian salad</p>
              <p>
                <span className="text-yellow-300">★★★★</span>☆
              </p>
              <p className="font-medium">
                <span className="text-red-500 text-xs">$</span>23.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDiv1;
