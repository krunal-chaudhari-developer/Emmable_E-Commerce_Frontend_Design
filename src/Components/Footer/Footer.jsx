import React from "react";
import appStore from "../../assets/App Store button.png";
import playStore from "../../assets/play store button.png";
import { Buyer, Seller, company } from "..";
import customerCare from "../../assets/customer-care.png";
import { AiOutlineRight } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="border-t border-b border-gray-300 sm:flex justify-between py-5">
          <div className="sm:flex space-x-3 lg:space-x-10 ml-5 lg:ml-32 xl:ml-52 my-2">
            <div className="flex justify-center">
              <h1 className="font-custom font-bold text-xl">Emmable</h1>
            </div>

            <div className="flex justify-center">
              <h1 className="mt-0.5 font-semibold text-sm sm:text-base">
                Easy & reliable online buying and selling site
              </h1>
            </div>
          </div>

          <div className="flex justify-between space-x-4 lg:space-x-10 sm:mt-1 lg:mt-0 lg:mr-32 xl:mr-52 mx-5 lg:mx-0">
            <div className="">
              <button className="">
                <img src={appStore} alt="App Store Button" className="w-28" />
              </button>
            </div>
            <div className="">
              <button className="">
                <img src={playStore} alt="Play Store button" className="w-32" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between border-b border-gray-300">
          <div className="sm:grid grid-cols-3 lg:flex lg:space-x-14 lg:ml-24 xl:ml-52 lg:py-10">
            <div className="">
              <h1 className="font-bold font-custom text-lg my-5 flex justify-center">
                Company
              </h1>
              <div className="space-y-1.5 lg:space-y-3">
                {company.map((e, id) => (
                  <div key={id} className="flex flex-col justify-center">
                    <button className="text-sm outline-none">{e.name}</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-10 sm:my-0">
              <h1 className="font-bold font-custom text-lg my-5 flex justify-center">
                Buyer
              </h1>
              <div className="space-y-1.5 lg:space-y-3">
                {Buyer.map((e, id) => (
                  <div key={id} className="flex flex-col justify-center">
                    <button className="text-sm outline-none">{e.name}</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-10 sm:my-0">
              <h1 className="font-bold font-custom text-lg my-5 flex justify-center">
                Seller
              </h1>
              <div className="space-y-1.5 lg:space-y-3">
                {Seller.map((e, id) => (
                  <div key={id} className="flex flex-col justify-center">
                    <button className="text-sm outline-none">{e.name}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:mr-24 xl:mr-40 my-14 space-y-5">
            <div className="mx-5 lg:mx-0">
              <h1 className="font-bold text-lg">Contact Us</h1>
            </div>

            <div className="border shadow-sm w-fit flex bg-white px-2 lg:px-5 py-1 lg:py-3 mx-5 lg:mx-0 rounded-xl">
              <div className="my-2">
                <img
                  src={customerCare}
                  alt="customer-care"
                  className="w-7 lg:w-10"
                />
              </div>

              <div className="mx-3">
                <h1 className="text-sm lg:text-base">
                  Got questions? Call us 24/7!
                </h1>
                <h1 className="font-semibold text-sm lg:text-base">
                  (00) 11 234 5678
                </h1>
              </div>

              <div className="my-3 lg:my-4">
                <AiOutlineRight />
              </div>
            </div>

            <div className="flex mx-5 lg:mx-0">
              <div className="">
                <h1 className="font-semibold">Find us on :</h1>
              </div>
              <div className="flex space-x-4 mx-5">
                <div className="bg-sky-500 w-fit p-1.5 rounded-full">
                  <BsTwitter className="text-white" />
                </div>
                <div className="">
                  <FaFacebook size={28} className="text-blue-700" />
                </div>
                <div className="bg-cyan-600 w-fit p-1.5 rounded-full">
                  <BiLogoLinkedin className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 justify-center py-3 lg:py-8">
          <MdOutlineCopyright className="lg:mt-1" />
          <h1 className="font-semibold text-xs lg:text-base">
            2022 All Rights reserved. Designed by Designspace.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
