import React from "react";

import burger from "../../assets/burger.png";
import sandWitch from "../../assets/sandwitch.png";
import ice from "../../assets/icecream.png";
import drinks from "../../assets/drinks.png";

const BodyDiv2 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <h2 className="text-red-500 font-medium text-xl m-5">
        CUSTOMER FAVORITES
      </h2>
      <h1 className="text-6xl font-bold m-5">Popular Catagories</h1>
      <div className="m-5 flex justify-between items-center w-full cursor-pointer">
        <div className="bg-white drop-shadow-md w-1/4 m-3 rounded-2xl h-64 flex flex-col justify-center items-center">
          <div>
            <img src={burger} alt="burger" className="rounded-full w-36 h-36" />
          </div>
          <h1 className="text-2xl font-medium">Main Dish</h1>
          <p className="text-slate-600  text-lg font-medium">(86 dishes)</p>
        </div>
        <div className="bg-white drop-shadow-md w-1/4 m-3 rounded-2xl h-64 flex flex-col justify-center items-center">
          <img
            src={sandWitch}
            alt="burger"
            className="rounded-full w-40 h-40"
          />
          <h1 className="text-2xl font-medium">Main Dish</h1>
          <p className="text-slate-600 text-lg font-medium">(86 dishes)</p>
        </div>
        <div className="bg-white drop-shadow-md w-1/4 m-3 rounded-2xl h-64 flex flex-col justify-center items-center">
          <img src={ice} alt="burger" className="rounded-full w-40 h-40 " />
          <h1 className="text-2xl font-medium">Main Dish</h1>
          <p className="text-slate-600 text-lg font-medium">(86 dishes)</p>
        </div>
        <div className="bg-white drop-shadow-md w-1/4 m-3 rounded-2xl h-64 flex flex-col justify-center items-center">
          <img src={drinks} alt="burger" className="rounded-full w-40 h-40" />
          <h1 className="text-2xl font-medium">Main Dish</h1>
          <p className="text-slate-600 text-lg font-medium">(86 dishes)</p>
        </div>
      </div>
    </div>
  );
};

export default BodyDiv2;
