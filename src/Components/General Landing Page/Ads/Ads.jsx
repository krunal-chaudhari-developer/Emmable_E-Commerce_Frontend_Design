import React, { useEffect, useState } from "react";
import Ad1 from "../../../assets/Ad 1.png";
import Ad2 from "../../../assets/Ad 2.png";
import Ad3 from "../../../assets/Ad 3.png";
import Ad4 from "../../../assets/Ad 4.png";
import Ad5 from "../../../assets/Ad 5.png";

const Ads = () => {
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
      <div className="flex justify-center">
        <div className="hidden sm:block">
          <div className="flex p-5 ">
            <div className="mx-1.5">
              <img src={Ad1} alt="Ad1" className="" />
            </div>
            <div className="space-y-3 mx-1.5">
              <div className="">
                <img src={Ad2} alt="Ad2" className="" />
              </div>
              <div className="">
                <img src={Ad3} alt="Ad3" className="" />
              </div>
            </div>
            <div className="space-y-2 mx-1.5">
              <div className="">
                <img src={Ad4} alt="Ad4" className="" />
              </div>
              <div className="">
                <img src={Ad5} alt="Ad5" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden block my-5">
          <div className="h-5/6">
            {images.map(({ img }, id) => (
              <div
                key={id}
                className={`${
                  id === currentImageIndex ? "block" : "hidden"
                } transition-opacity duration-1000 mx-5`}
              >
                <img src={img} alt={`Ad${id + 1}`} className="" />
              </div>
            ))}
          </div>

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
    </>
  );
};

export default Ads;

export const images = [
  {
    img: Ad2,
  },
  {
    img: Ad3,
  },
  {
    img: Ad4,
  },
  {
    img: Ad5,
  },
];
