import React from "react";

const Otp = () => {
  return (
    <>
      <div className="font-custom">
        <div className="flex px-4 py-2 my-1 justify-between">
          <h1 className="text-indigo-700 font-bold text-2xl">Emmable</h1>
        </div>

        <div className="flex justify-center">
          <div className="md:border md:shadow-xl my-20 rounded-3xl px-10 md:px-14">
            <div className="text-center my-5 ">
              <h1 className="flex flex-col md:flex-row text-xl md:text-2xl font-bold text-indigo-600">
                Verify OTP{" "}
                <span className="font-normal"> (One Time Password) </span>
              </h1>
            </div>

            <div className="mx-10 mt-10 flex justify-center space-x-4">
              <div className="">
                <input className="outline-none border  rounded-md shadow-md text-center p-2 w-10  h-14" />
              </div>
              <div className="">
                <input className="outline-none border rounded-md shadow-md text-center p-2  w-10 h-14" />
              </div>
              <div className="">
                <input className="outline-none border rounded-md shadow-md text-center p-2 w-10  h-14" />
              </div>
              <div className="">
                <input className="outline-none border rounded-md shadow-md text-center p-2 w-10  h-14" />
              </div>
            </div>

            <div className="flex justify-center my-10">
              <button className="text-white font-semibold bg-indigo-700 rounded-full text-sm sm:text-base px-6 sm:px-10 py-1 outline-none">
                Verify OTP
              </button>
            </div>

            <div className="mx-8 my-10">
              <h1 className="outline-none text-indigo-700 font-semibold text-xs md:text-sm text-center">
                Resend OTP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
