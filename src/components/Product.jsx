import React from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ cartCount, setCartCount, setPrice }) => {
  const [errorMsg, setErrorMsg] = useState(false);

  const incrementCount = () => {
    if (cartCount < 5) {
      setCartCount((prevValue) => prevValue + 1);
    }
  };

  const decrementCount = () => {
    if (cartCount > 0) {
      setCartCount((prevValue) => prevValue - 1);
    }
  };

  const handleAddProduct = () => {
    if (cartCount > 0) {
      setPrice(cartCount);
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <section>
      <div className="flex flex-col gap-3 px-5 py-4">
        <h4 className="uppercase text-xs font-bold tracking-wider text-orange-600">
          Sneaker company
        </h4>
        <h2 className="font-bold text-2xl">Fall Limited Edition Sneakers</h2>
        <p className="text-base text-dark-grayish-blue-500 py-1">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable robber outer sole, they'll withstand everything
          the erather can offer.
        </p>
        <div className="price-container flex justify-between items-center pt-1 pb-3">
          <div className="first-part flex items-center gap-3">
            <p className="font-bold text-xl">$125.00</p>
            <p className="font-bold text-sm text-orange-600 bg-orange-100 px-2 rounded-md">
              50%
            </p>
          </div>
          <div className="second-part">
            <p className="line-through font-bold text-sm text-light-grayish-blue-700">
              $250.00
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="product-count relative flex justify-around items-center bg-light-grayish-blue-500 p-3 rounded-md">
            <FaMinus
              className="absolute left-4 text-sm text-orange-600 cursor-pointer"
              onClick={decrementCount}
            />
            <p className="font-bold select-none">{cartCount}</p>
            <FaPlus
              className="absolute right-4 text-sm text-orange-600 cursor-pointer"
              onClick={incrementCount}
            />
          </div>
          {errorMsg && (
            <p className="text-red-600 animate__animated animate__fadeIn">
              Select how many products you want to buy.
            </p>
          )}
          <div className="">
            <button
              onClick={handleAddProduct}
              type="button"
              className="relative flex items-center justify-center gap-3 p-3 rounded-md w-full text-white text-sm font-bold bg-orange-500 shadow-lg shadow-orange-500/30"
            >
              <AiOutlineShoppingCart className="text-lg text-white" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
