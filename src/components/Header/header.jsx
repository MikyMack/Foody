import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BiShoppingBag, BiPhoneCall } from "react-icons/bi";

import img from "../../assets/logo.png";

export default function header() {
  return (
    <div style={{boxShadow: '0 0.5px 8px 0.3px rgba(0, 0, 0, 0.4)'}} className='drop-shadow-md'>
    <div className='container md:max-w-screen-lg  mx-auto flex justify-between items-center w-full h-14'>
      <div className=' h-full'>
        <img src={img} alt="logo" className='p-3 h-full'/>
      </div>
      <div className='flex justify-between font-semibold'>
        <div className='p-6 '>
          <h1 className='text-base m-1 text-green-400'>Home</h1>
        </div>
        <div className='flex justify-center items-center p-6'>
          <h1 >Menu </h1>
          <RiArrowDropDownLine className='text-green-400 m-1 text-2xl'/>
        </div>
        <div className='flex justify-center items-center p-6'>
          <h1>Services </h1>
          <RiArrowDropDownLine className='text-green-400 m-1 text-2xl '/>
        </div>
        <div className='p-6'>
          <h1 className='text-base m-1'>Offers</h1>
        </div>
      </div>
      <div className='flex justify-between items-center '>
        <div className='mx-3'>
          <FiSearch className='text-2xl m-1 '/>
        </div>
        <div className='relative text-2xl m-1 mx-3'>
          <BiShoppingBag/>
          <p className='absolute -top-1 -right-1 text-xs bg-green-400 rounded-full w-4 h-4 text-center text-white'>8</p>
        </div>
        <div className='flex justify-center items-center bg-green-400 rounded-full px-3 mx-3 py-1 text-white font-medium'>
          <BiPhoneCall className='m-1'/>
          <h1 className='m-1'>Contact</h1>
        </div>
      </div>
    </div>
    
  </div>
  );
}
