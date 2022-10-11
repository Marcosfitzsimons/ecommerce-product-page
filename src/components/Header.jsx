import React from "react";
import "animate.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import ImageThumbnail from "../assets/image-product-1-thumbnail.jpg";

const Header = ({
  showMenu,
  handleShowMenu,
  showCart,
  handleShowCart,
  setPrice,
  price,
}) => {
  return (
    <header className="header md:relative">
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
              <li className="cursor-pointer">Collections</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="right-side flex items-center gap-4">
          <div className="cart-container relative ">
            <AiOutlineShoppingCart
              className="text-2xl cursor-pointer"
              onClick={handleShowCart}
            />
            {price > 0 && (
              <p
                onClick={handleShowCart}
                className="animate__animated animate__fadeIn flex absolute text-[8px] top-[-.2rem] right-[-.3rem] cursor-pointer text-white bg-orange-600 rounded-full h-3 w-4 flex-items-center justify-center"
              >
                {price}
              </p>
            )}
          </div>
          <div className="profile-img-container w-8">
            <img src={avatar} alt="avatar" className="cursor-pointer" />
          </div>
        </div>
        {showMenu && (
          <nav className="nav-mobile absolute w-full h-full left-0 top-0 bg-black/70 z-40 md:hidden">
            <div
              className={`animate__animated animate__fadeInLeft w-[70%] sm:w-[50%] h-screen bg-white ${
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
      {showCart && (
        <div className="animate__animated animate__fadeInDown cart absolute w-screen bg-white left-0 top-20 h-[250px] z-30">
          <div className="cart-container w-[90%] h-full mx-auto">
            <div className="cart-header py-5 border-b">
              <h4 className="font-bold">Cart</h4>
            </div>
            <div className="cart-content flex items-center h-[68%] justify-center">
              {price > 0 ? (
                <div className="flex flex-col w-full animate__animated animate__fadeIn">
                  <div className="flex items-center justify-between py-5 self-start w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-16 rounded-md">
                        <img
                          src={ImageThumbnail}
                          alt="shoes thumbnail"
                          className="rounded-md"
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-500">
                          Autumn Limited Edition...
                        </p>
                        <p className="text-gray-500">
                          $125.00 x {price}{" "}
                          <span className="font-bold text-black">
                            {125 * price}.00
                          </span>
                        </p>
                      </div>
                    </div>
                    <FaTrashAlt
                      className="cursor-pointer text-gray-400 text-lg"
                      onClick={() => setPrice(0)}
                    />
                  </div>
                  <button className="py-4 text-white/95 font-bold bg-orange-500 rounded-lg">
                    Checkout
                  </button>
                </div>
              ) : (
                <p className="font-bold text-dark-grayish-blue-500 animate__animated animate__fadeIn">
                  Your cart is empty.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
