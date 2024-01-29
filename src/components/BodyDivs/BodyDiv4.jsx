import React from "react";

import img from "../../assets/customer.png";
import img2 from "../../assets/customer_feed.png";

const BodyDiv4 = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-1/2 h-full flex m-10">
        <img src={img} alt="" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-start m-10">
        <p className="text-red-500 text-xl font-medium m-5">TESTIMONIALS</p>
        <p className="text-5xl font-bold m-5">
          What Our Customers Say About Us
        </p>
        <p className="text-xl font-semibold text-slate-600 m-5">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <img src={img2} alt="feedback" className="w-2/3" />
      </div>
    </div>
  );
};

export default BodyDiv4;
