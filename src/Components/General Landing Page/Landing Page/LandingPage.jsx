import React, { useEffect, useState } from "react";
import Sale from "../Sale/Sale";
import Ads from "../Ads/Ads";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import { images } from "../..";
import Layout from "../../Layout/Layout";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Layout>
      <div className=" flex justify-center ">
        <div className="my-8 mx-3">
          {images.map((img, id) => (
            <div
              key={id}
              className={`${
                id === currentImageIndex ? "block" : "hidden"
              } transition-opacity duration-1000 mx-2 sm:mx-5`}
            >
              <img
                src={img.img}
                alt={`Banner ${id}`}
                className="rounded-xl w-full h-40 sm:h-72"
              />
            </div>
          ))}
          <div className="flex space-x-3 justify-center">
            {images.map((_, id) => (
              <div
                key={id}
                className={`${
                  id === currentImageIndex ? "bg-gray-600" : "bg-gray-300"
                }  rounded-full w-fit p-1 border-none my-4`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Sale />
      </div>

      <div className="my-20">
        <div className="mx-7">
          <div className="">
            <h1 className="font-custom font-bold sm:text-xl md:text-2xl">
              Today's Promotion
            </h1>
          </div>

          <div className="">
            <h1 className="font-normal text-sm sm:text-base md:text-lg">
              Get the Best Offers from the Emmable Official Store
            </h1>
          </div>
        </div>
        <Ads />
      </div>

      <div className="my-20">
        <div className="mx-7">
          <div className="">
            <h1 className="font-custom font-bold sm:text-xl md:text-2xl">
              Popular Categories
            </h1>
          </div>
        </div>
        <Categories />
      </div>

      <div className="my-20">
        <Products />
      </div>
    </Layout>
  );
};

export default LandingPage;
