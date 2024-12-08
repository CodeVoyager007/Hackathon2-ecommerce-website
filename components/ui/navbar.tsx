import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[100px] bg-[#FBEBB5] text-[#FAFAFA] flex">
      <div className="flex-grow h-[150px] text-[#000000] pt-[38px] pl-[20px] space-x-20">
        <Link to="/home" className="w-[48px] h-[24px] font-poppins font-medium text-base text-2xl]">
          Home
        </Link>
        <Link to="/shop" className="w-[48px] h-[24px] font-poppins font-medium text-base">
          Shop
        </Link>
        <Link to="/about" className="w-[48px] h-[24px] font-poppins font-medium text-base">
          About
        </Link>
        <Link to="/contact" className="w-[48px] h-[24px] font-poppins font-medium text-base">
          Contact
        </Link>
      </div>
      <div className="flex text-[#000000] h-[28px] space-x-12 pt-9 pr-4">
        <Link to="/account">
          <HiOutlineUser className="w-[28px] h-[28px]" />
        </Link>
        <Link to="/search">
          <FiSearch className="w-[28px] h-[28px]"/>
        </Link>
        <Link to="/favorites">
          <FaRegHeart className=" w-[28px] h-[28px]"/>
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="w-[28px] h-[28px]"/>
        </Link>
      </div>
    </div>
  );
};

export default Header;



