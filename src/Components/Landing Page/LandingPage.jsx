import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sale from "./Sale/Sale";
import general1 from "../../assets/general 1.jpeg";
import general2 from "../../assets/Ad 2.png";
import general3 from "../../assets/Ad 3.png";
import general4 from "../../assets/Ad 4.png";
import general5 from "../../assets/Ad 5.png";
import Ads from "./Ads/Ads";

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
    <>
      <Navbar />
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
    </>
  );
};

export default LandingPage;

export const images = [
  {
    id: 1,
    img: general1,
  },
  {
    id: 2,
    img: general2,
  },
  {
    id: 3,
    img: general3,
  },
  {
    id: 4,
    img: general4,
  },
  {
    id: 5,
    img: general5,
  },
];
