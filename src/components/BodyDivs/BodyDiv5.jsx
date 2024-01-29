import React from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.png";

const BodyDiv5 = () => {
  return (
    <div className="w-full flex justify-between items-center mb-20">
      <div className="w-1/2 flex flex-col justify-center ">
        <p className="text-red-400 text-xl font-semibold m-5">
          OUR STORY AND SERVICES
        </p>
        <div className="w-full m-5">
          <h1 className="text-5xl font-extrabold">
            Our Culinary Journey <br /> And Services
          </h1>
        </div>
        <p className="m-5 text-xl font-medium text-neutral-700">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <div className="flex justify-start items-center text-xl font-medium m-3">
          <div
            style={{ boxShadow: "0 0.5px 8px 0.3px lightGreen" }}
            className=" mx-3 flex justify-center items-center bg-green-400 rounded-full px-12 py-5 text-white drop-shadow-xl"
          >
            <p>Explore</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-between items-center">
        <div className="flex">
          <div className="bg-white drop-shadow-md w-1/2 m-5 p-10 rounded-2xl h-64 flex flex-col justify-center items-center">
            <div className="h-1/2">
              <img src={img1} alt="" className="h-2/3" />
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold text-[#005809]">CATERING</h1>
              <p className="text-slate-500 text-lg font-medium  text-center">
                Delight your guests with our flavors and presentation
              </p>
            </div>
          </div>
          <div className="bg-white drop-shadow-md w-1/2 m-5 p-10  rounded-2xl h-64 flex flex-col justify-center items-center">
            <div className="h-1/2">
              <img src={img2} alt="" className="h-2/3" />
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-medium  text-[#005809]">
                Fast delivery
              </h1>
              <p className="text-slate-500 text-lg font-medium text-center">
                We deliver your order promptly to your door
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white drop-shadow-md w-1/2 m-5 p-10  rounded-2xl h-64 flex flex-col justify-center items-center">
            <div className="h-1/2">
              <img src={img3} alt="" className="h-2/3" />
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-medium  text-[#005809]">
                Online Ordering
              </h1>
              <p className="text-slate-500 text-lg font-medium text-center">
                Explore menu & order with ease using our Online Ordering{" "}
              </p>
            </div>
          </div>
          <div className="bg-white drop-shadow-md w-1/2 m-5 p-10  rounded-2xl h-64 flex flex-col justify-center items-center">
            <div className="h-1/2">
              <img src={img4} alt="" className="h-2/3" />
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-medium  text-[#005809]">
                Fast delivery
              </h1>
              <p className="text-slate-500 text-lg font-medium text-center">
                Give the gift of exceptional dining with Foodi Gift Cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDiv5;
