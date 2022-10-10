import React from "react";
import "animate.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";

const Header = ({ showMenu, setShowMenu }) => {
  const handleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <div className="m-auto container flex justify-between items-center px-4 py-5">
        <div className="left-side flex items-center gap-3 md:gap-12">
          <div className="menu-icon-container transition-all md:hidden z-50">
            {showMenu ? (
              <IoIosClose
                className="text-4xl text-dark-grayish-blue-500 relative top-[.1rem] right-1 cursor-pointer"
                onClick={handleShowMenu}
              />
            ) : (
              <BiMenu
                className="text-3xl text-dark-grayish-blue-500 relative top-[.1rem] cursor-pointer"
                onClick={handleShowMenu}
              />
            )}
          </div>
          <div className="logo-container">
            <img src={logo} alt="logo" className="cursor-pointer" />
          </div>
          <nav className="nav hidden md:flex">
            <ul className="nav-list flex gap-7 items-center">
              <li className="nav-link">Collections</li>
              <li className="nav-link">Men</li>
              <li className="nav-link">Women</li>
              <li className="nav-link">About</li>
              <li className="nav-link">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="right-side flex items-center gap-4">
          <div className="cart-container">
            <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
          </div>
          <div className="profile-img-container w-8">
            <img src={avatar} alt="avatar" className="cursor-pointer" />
          </div>
        </div>
        {showMenu && (
          <nav className="nav-mobile absolute w-full h-full left-0 top-0 bg-black/70 z-30 md:hidden">
            <div
              className={`animate__animated animate__fadeInLeft z-40 w-[70%] sm:w-[50%] h-full bg-white ${
                showMenu ? "translate-x-[0] " : "translate-x-[-400px]"
              }`}
            >
              <ul className="pt-20 px-5 flex flex-col gap-4">
                <li className="font-bold cursor-pointer">Collections</li>
                <li className="font-bold cursor-pointer">Men</li>
                <li className="font-bold cursor-pointer">Women</li>
                <li className="font-bold cursor-pointer">About</li>
                <li className="font-bold cursor-pointer">Contact</li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
