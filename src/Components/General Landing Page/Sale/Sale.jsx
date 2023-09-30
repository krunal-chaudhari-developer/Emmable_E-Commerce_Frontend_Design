import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { sale } from "../..";
import { useMediaQuery } from "react-responsive";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sale = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const [seeMore, setSeeMore] = useState(false);

  const isExtraLargeScreen3 = useMediaQuery({ minWidth: 2480 });
  const isExtraLargeScreen2 = useMediaQuery({ minWidth: 2300 });
  const isExtraLargeScreen1 = useMediaQuery({ minWidth: 2000 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1700 });
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });
  const isMediumlargeScreen = useMediaQuery({ minWidth: 1215 });
  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isSmallScreen = useMediaQuery({ minWidth: 680 });
  const isExtraSmallScreen = useMediaQuery({ minWidth: 425 });

  useEffect(() => {
    if (isExtraLargeScreen3) {
      setSlidesPerPage(10);
    } else if (isExtraLargeScreen2) {
      setSlidesPerPage(9);
    } else if (isExtraLargeScreen1) {
      setSlidesPerPage(8);
    } else if (isExtraLargeScreen) {
      setSlidesPerPage(6);
    } else if (isLargeScreen) {
      setSlidesPerPage(5);
    } else if (isMediumlargeScreen) {
      setSlidesPerPage(5);
    } else if (isMediumScreen) {
      setSlidesPerPage(4);
    } else if (isSmallScreen) {
      setSlidesPerPage(3);
    } else if (isExtraSmallScreen) {
      setSlidesPerPage(2);
    } else {
      setSlidesPerPage(1);
    }
  }, [
    isExtraLargeScreen3,
    isExtraLargeScreen2,
    isExtraLargeScreen1,
    isExtraLargeScreen,
    isLargeScreen,
    isMediumlargeScreen,
    isMediumScreen,
    isSmallScreen,
    isExtraSmallScreen,
  ]);

  const goToPrevSlide = () => {
    setCurSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const goToNextSlide = () => {
    setCurSlide((prevSlide) =>
      Math.min(prevSlide + 1, sale.length - slidesPerPage)
    );
  };

  const visibleSlides = seeMore
    ? sale
    : sale.slice(curSlide, curSlide + slidesPerPage);
  return (
    <>
      <div className="bg-gray-100 rounded-lg mx-2 sm:mx-5">
        <div className="sm:flex justify-between p-3">
          <div className="flex space-x-5">
            <div className="">
              <h1 className="font-bold text-xl sm:text-2xl">Flash Sale</h1>
            </div>

            <div className="flex space-x-2 p-1.5 bg-orange-400 rounded-md">
              <h1 className="text-white font-semibold">Ends in</h1>
              <h1 className="text-white font-semibold">|</h1>
              <h1 className="text-white font-semibold">01:16:57</h1>
            </div>
          </div>

          <div className="mt-1 sm:mx-4">
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="text-indigo-700 font-bold outline-none"
            >
              {seeMore ? "Close All" : "See More"}
            </button>
          </div>
        </div>
        <div
          className={`${
            seeMore ? "grid grid-cols-2 sm:grid-cols-5 2xl:grid-cols-7" : ""
          } flex justify-center mx-1 pb-5`}
        >
          {visibleSlides.map(({ id, img }) => (
            <Link
              key={id}
              to={`/sidebar/${id}`}
              className="shadow-md rounded-lg h-fit w-fit mx-1 sm:mx-3 my-3"
            >
              <div className="">
                <div className="">
                  <img
                    src={img}
                    alt="products"
                    className={`${
                      seeMore ? "w-32 h-24" : "w-44 h-36"
                    }  lg:w-56 lg:h-44 rounded-t-lg`}
                  />
                </div>
                <div className="px-2.5 py-1">
                  <h1
                    className={`${
                      seeMore ? "w-28" : "w-40"
                    } lg:w-52 text-xs lg:text-sm font-semibold`}
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

                  <div className="flex my-1">
                    <IoLocationSharp className="text-gray-600 mt-1" />
                    <h1 className="font-semibold text-xs lg:text-sm">Mumbai</h1>
                  </div>

                  <div className="flex pb-3">
                    <AiFillStar className="text-yellow-400 mt-1" />
                    <div className="flex space-x-2">
                      <h1 className="text-xs lg:text-sm">4.8</h1>
                      <h1 className="text-xs lg:text-sm">|</h1>
                      <h1 className="text-xs lg:text-sm mt-1 lg:mt-0">
                        Sold 700+
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!seeMore ? (
          <>
            <BiChevronLeft
              size={45}
              onClick={goToPrevSlide}
              className={`${
                curSlide === 0 ? "hidden" : "block"
              } absolute left-3 -mt-48 bg-white py-2 rounded-full `}
            >
              Prev
            </BiChevronLeft>
            <BiChevronRight
              size={45}
              onClick={goToNextSlide}
              className={`${
                curSlide >= sale.length - slidesPerPage ? "hidden" : "block"
              } absolute right-3 -mt-48 bg-white py-2 rounded-full`}
            >
              Next
            </BiChevronRight>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Sale;
