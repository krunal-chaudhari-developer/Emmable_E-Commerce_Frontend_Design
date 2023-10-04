import React from "react";
import { categories } from "../..";

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex space-x-2 lg:space-x-3 mx-4 lg:mx-8">
        {categories.map(({ id, img, name }) => (
          <div
            key={id}
            className="border shadow shadow-gray-300 lg:w-56 rounded-lg px-8 py-5 my-4 lg:my-8"
          >
            <div className="flex justify-center my-5">
              <img src={img} alt={img} className="w-10" />
            </div>

            <div className="flex justify-center my-5">
              <h1 className="font-semibold font-custom text-xs whitespace-nowrap md:text-sm lg:text-base">
                {name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
