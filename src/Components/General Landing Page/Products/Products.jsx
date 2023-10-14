import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

const Products = () => {
  const [sale, setSale] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setSale(res.data.products));
  }, []);

  return (
    <>
      <div className="">
        <div className="mx-7">
          <div className="flex justify-between">
            <h1 className="font-custom font-bold sm:text-xl md:text-2xl">
              Products You May Like
            </h1>
          </div>
        </div>
        <div
          className={` grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-1.5 sm:px-6 pb-5`}
        >
          {sale.slice(0, 15).map((e, id) => (
            <Link
              key={e.id}
              to={`/singleproduct/${e.id}`}
              className="shadow-md rounded-lg h-fit w-fit mx-1 sm:mx-3 my-3"
            >
              <div className="">
                <div className="">
                  <img
                    src={e.thumbnail}
                    alt={e.title}
                    className={`lg:w-56 lg:h-44 rounded-t-lg`}
                  />
                </div>
                <div className="px-2.5 py-1">
                  <h1 className={` lg:w-52 text-xs lg:text-sm font-semibold`}>
                    {e.description.substring(0, 44)}
                    ...
                  </h1>

                  <div className="flex my-2 space-x-3">
                    <h1 className="font-bold text-xs lg:text-sm">${e.price}</h1>
                    <h1 className="text-red-600 bg-red-100 px-1 rounded text-xs lg:text-sm">
                      {e.discountPercentage}%
                    </h1>
                  </div>

                  <div className="flex pb-3">
                    <AiFillStar className="text-yellow-400 mt-0.5" />
                    <div className="flex space-x-2">
                      <h1 className="text-xs font-semibold lg:text-sm">
                        {e.rating}
                      </h1>
                      <h1 className="text-xs lg:text-sm">|</h1>
                      <h1 className="text-xs font-semibold lg:text-sm mt-1 lg:mt-0">
                        Stock : {e.stock}
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
