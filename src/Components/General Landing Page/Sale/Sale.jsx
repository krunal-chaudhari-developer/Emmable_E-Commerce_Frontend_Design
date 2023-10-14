import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

const Sale = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const [seeMore, setSeeMore] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?skip=0&limit=100")
      .then((res) => setProduct(res.data.products));
  }, []);

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
      Math.min(prevSlide + 1, product.length - slidesPerPage)
    );
  };

  const visibleSlides = seeMore
    ? product
    : product.slice(curSlide, curSlide + slidesPerPage);
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
          {visibleSlides.map((e, id) => (
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
                    <AiFillStar className="text-yellow-400 mt-1" />
                    <div className="flex space-x-2">
                      <h1 className="text-xs lg:text-sm">{e.rating}</h1>
                      <h1 className="text-xs lg:text-sm">|</h1>
                      <h1 className="text-xs lg:text-sm mt-1 lg:mt-0">
                        Stock : {e.stock}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            // <Link
            //   key={id}
            //   to={`/singleproduct/${e.id}`}
            //   className="shadow-md rounded-lg h-fit w-fit mx-1 sm:mx-3 my-3"
            // >
            //   <div className="">
            //     <div className="">
            //       <img
            //         src={e.image}
            //         alt="products"
            //         className={` w-32 h-32 sm:w-44 sm:h-32 lg:w-56 lg:h-44 rounded-t-lg`}
            //       />
            //     </div>
            //     <div className="px-2.5 py-1">
            //       <h1 className="font-bold text-lg capitalize my-1">
            //         {e.name}
            //       </h1>
            //       <h1
            //         className={` w-28 lg:w-52 text-xs lg:text-sm font-semibold`}
            //       >
            //         {`${e.description}`.substring(0, 44)}
            //         ...
            //       </h1>

            //       <div className="flex space-x-2 my-2">
            //         <h1 className="font-bold text-xs lg:text-sm">
            //           {" "}
            //           Rs. {e.price}
            //         </h1>

            //         <h1 className="line-through font-semibold text-xs lg:text-sm">
            //           Rs. 50000
            //         </h1>
            //       </div>

            //       <div className="flex my-2">
            //         <h1 className="text-xs lg:text-sm bg-gray-300 text-gray-600 px-1 py-0.5 rounded-md">
            //           Company
            //         </h1>
            //         {/* <IoLocationSharp className="text-gray-600 sm:mt-1" /> */}
            //         <h1 className="font-semibold text-xs lg:text-sm capitalize mx-2 mt-0.5">
            //           {e.company}
            //         </h1>
            //       </div>
            //     </div>
            //   </div>
            // </Link>
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
                curSlide >= product.length - slidesPerPage ? "hidden" : "block"
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
