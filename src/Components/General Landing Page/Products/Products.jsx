import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { sale } from "../..";

const Products = () => {
  return (
    <>
      <div className="">
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-1.5 sm:px-6 pb-5`}
        >
          {sale.map((img, id) => (
            <Link
              key={id}
              to={`/sidebar/${id}`}
              className="shadow-md rounded-lg h-fit w-fit mx-1 sm:mx-3 my-3"
            >
              <div className="">
                <div className="">
                  <img
                    src={img.img}
                    alt="products"
                    className={` w-32 h-32 sm:w-44 sm:h-32 lg:w-56 lg:h-44 rounded-t-lg`}
                  />
                </div>
                <div className="px-2.5 py-1">
                  <h1
                    className={` w-28 lg:w-52 text-xs lg:text-sm font-semibold`}
                  >
                    {"Awesome Brand - Cool product with nice color Cool product with nice color".substring(
                      0,
                      44
                    )}
                    ...
                  </h1>

                  <h1 className="font-bold my-2 text-xs lg:text-sm">$85.00</h1>

                  <div className="flex">
                    <h1 className="text-red-600 bg-red-100 px-1 rounded text-xs lg:text-sm">
                      40%
                    </h1>
                    <h1 className="line-through mx-2 font-semibold text-xs lg:text-sm">
                      $46,000
                    </h1>
                  </div>

                  <div className="flex my-2">
                    <IoLocationSharp className="text-gray-600 sm:mt-1" />
                    <h1 className="font-semibold text-xs lg:text-sm">Mumbai</h1>
                  </div>

                  <div className="flex pb-3">
                    <AiFillStar className="text-yellow-400 mt-0.5 md:mt-1" />
                    <div className="flex space-x-2 mx-1">
                      <h1 className="text-xs lg:text-sm mt-0.5 md:mt-0">4.8</h1>
                      <h1 className="text-xs lg:text-sm">|</h1>
                      <h1 className="text-xs lg:text-sm mt-0.5 md:mt-0">
                        Sold 700+
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
