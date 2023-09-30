import React from "react";
import toys from "../../../assets/toys and hobby.png";
import gaming from "../../../assets/gaming.png";
import computer from "../../../assets/computer.png";
import health from "../../../assets/health.png";
import furniture from "../../../assets/furniture.png";
import fashion from "../../../assets/fashion.png";

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

export const categories = [
  {
    id: 1,
    img: toys,
    name: "Toys and Hobby",
  },
  {
    id: 2,
    img: gaming,
    name: "Gaming",
  },
  {
    id: 3,
    img: computer,
    name: "Computer",
  },
  {
    id: 4,
    img: health,
    name: "Health",
  },
  {
    id: 5,
    img: furniture,
    name: "Furniture",
  },
  {
    id: 6,
    img: fashion,
    name: "Fashion",
  },
];
