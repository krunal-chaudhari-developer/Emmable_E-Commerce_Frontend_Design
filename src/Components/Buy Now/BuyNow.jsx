import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus, BsCheckLg } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";

const BuyNow = ({ stock }) => {
  const [Wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(() => quantity + 1);
  };

  const handleMinus = () => {
    setQuantity(() => quantity - 1);
  };

  return (
    <>
      <div className="border rounded-lg shadow-sm mx-4">
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
            <div className="">
              <h1 className="text-lg font-bold text-gray-600">Quantity</h1>
            </div>

            <div className="flex">
              <div className="">
                <h1 className="">{quantity}</h1>
              </div>

              <div className="">
                <button onClick={handleMinus} className="">
                  -
                </button>
                <button onClick={handlePlus} className="">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" grid grid-cols-2">
              <div className="">
                <h1 className="">Price :</h1>
              </div>

              <div className="">
                <h1 className="">$85.00</h1>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="">Shipping :</h1>
              </div>

              <div className="">
                <h1 className="">$5.00</h1>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="">Subtotal :</h1>
              </div>

              <div className="">
                <h1 className="">$90.00</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <button className="flex">
              <BsCartPlus size={20} />
              <span className="">Add to Cart</span>
            </button>
          </div>

          <div className="">
            <button className="">Buy Now</button>
          </div>
        </div>

        <div className="">
          <label onClick={() => setWishlist(!Wishlist)} className="flex">
            {Wishlist ? (
              <>
                <AiFillHeart size={20} />
              </>
            ) : (
              <>
                <AiOutlineHeart size={20} />
              </>
            )}
            <h1 className="">Wishlist</h1>
          </label>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
