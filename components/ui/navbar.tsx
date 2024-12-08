import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="w-full h-[100px] bg-[#FBEBB5] text-[#FAFAFA] flex">
      <div className="flex-grow h-[150px] text-[#000000] pt-[38px] pl-[20px] space-x-20">
        <a
          href="#"
          className="w-[48px] h-[24px] font-poppins font-medium text-base text-2xl]"
        >
          Home
        </a>
        <a
          href="#"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Shop
        </a>
        <a
          href="#"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          About
        </a>
        <a
          href="#"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Contact
        </a>
      </div>
      <div className="flex text-[#000000] h-[28px] space-x-12 pt-9 pr-4">
        <HiOutlineUser className="w-[28px] h-[28px]" />
        <FiSearch className="w-[28px] h-[28px]"/>
        <FaRegHeart className=" w-[28px] h-[28px]"/>
        <AiOutlineShoppingCart className="w-[28px] h-[28px]"/>
      </div>
    </div>
  );
};

export default Header;



