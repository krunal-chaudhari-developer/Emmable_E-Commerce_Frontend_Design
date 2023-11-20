import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus, BsCheckLg } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";

const BuyNow = ({ stock, price }) => {
  const [Wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const subtotal = price * quantity + 5;

  const handlePlus = () => {
    setQuantity(() => quantity + 1);
  };

  const handleMinus = () => {
    setQuantity(() => quantity - 1);
  };

  return (
    <>
      <div className="border rounded-lg shadow-sm mx-10 my-4">
        <div className="flex justify-between p-3">
          <div className="">
            <h1 className="flex space-x-2">
              {stock <= 45 ? (
                <PiWarningCircleBold
                  size={20}
                  className="mt-0.5 text-red-700"
                />
              ) : (
                <BsCheckLg size={20} className="mt-0.5 text-green-500" />
              )}
              <span
                className={`${
                  stock <= 45 ? "text-red-700" : ""
                } font-custom font-semibold`}
              >
                {stock <= 45 && stock >= 1
                  ? "Hurry! Only few products left"
                  : stock === 0
                  ? "Not Available"
                  : "In Stock"}
              </span>
            </h1>
          </div>

          <div className="mx-2">
            <h1 className="font-semibold font-custom">{stock}</h1>
          </div>
        </div>

        <div className="border-b mx-4" />

        <div className="p-3">
          <div className="flex justify-between">
            <div className="my-1">
              <h1 className="text-lg font-bold text-gray-600">Quantity</h1>
            </div>

            <div className="grid grid-cols-2 px-2 w-6/12 rounded-md border border-gray-400 shadow-sm shadow-gray-400">
              <div className="p-1.5 my-1.5">
                <h1 className="font-semibold">{quantity}</h1>
              </div>

              <div className="space-x-1 my-1">
                <button
                  onClick={handleMinus}
                  className="text-3xl font-semibold text-indigo-700 bg-gray-100 mt-0.5 px-2 rounded-lg"
                >
                  -
                </button>
                <button
                  onClick={handlePlus}
                  className="text-3xl font-semibold text-indigo-700 bg-gray-100 mt-0.5 px-2 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2 my-4">
            <div className=" grid grid-cols-2">
              <div className="">
                <h1 className="font-bold text-gray-600">Price :</h1>
              </div>

              <div className="flex space-x-3">
                <h1 className="font-semibold">${price * quantity}</h1>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="font-bold text-gray-600">Shipping :</h1>
              </div>

              <div className="">
                <h1 className="font-semibold">$5</h1>
              </div>
            </div>

            <div className="border w-9/12" />

            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="font-bold text-gray-600">Subtotal :</h1>
              </div>

              <div className="">
                <h1 className="font-semibold">${subtotal}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-indigo-700 hover:bg-indigo-800 flex justify-center mx-5 p-2.5 rounded-lg">
            <button className="flex space-x-3">
              <BsCartPlus size={22} className="text-white font-semibold" />
              <span className="text-white font-semibold text-lg">
                Add to Cart
              </span>
            </button>
          </div>

          <div className="border border-indigo-700 hover:bg-slate-200 mx-5 p-2.5 rounded-lg flex justify-center">
            <button className="text-indigo-700 font-bold">Buy Now</button>
          </div>
        </div>

        <div className="my-4 flex justify-center">
          <label onClick={() => setWishlist(!Wishlist)} className="flex">
            {Wishlist ? (
              <>
                <AiFillHeart size={20} className="mt-1 mx-2 text-indigo-700" />
              </>
            ) : (
              <>
                <AiOutlineHeart
                  size={20}
                  className="mt-1 mx-2 text-indigo-700"
                />
              </>
            )}
            <h1 className="text-lg font-custom font-semibold text-indigo-700">
              Wishlist
            </h1>
          </label>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
