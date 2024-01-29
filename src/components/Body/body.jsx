import React from "react";
import BodyDiv1 from "../BodyDivs/BodyDiv1";
import BodyDiv2 from "../BodyDivs/BodyDiv2";
import BodyDiv3 from "../BodyDivs/BodyDiv3";
import BodyDiv4 from "../BodyDivs/BodyDiv4";
import BodyDiv5 from "../BodyDivs/BodyDiv5";

const body = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="container md:max-w-screen-lg mx-auto w-full flex flex-col items-center justify-between h-full">
        <BodyDiv1 />
        <BodyDiv2 />
        <BodyDiv3 />
        <BodyDiv4 />
        <BodyDiv5 />
      </div>
    </div>
  );
};

export default body;
