import React from "react";
import { AiOutlineLock } from "react-icons/ai";

const ResetPassword = () => {
  return (
    <>
      <div className="font-custom">
        <div className="flex px-4 py-2 my-1 justify-between">
          <h1 className="text-indigo-700 font-bold text-2xl">Emmable</h1>
        </div>

        <div className="flex justify-center">
          <div className="md:border md:shadow-xl my-20 rounded-3xl px-10 md:px-14">
            <div className="text-center my-5">
              <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">
                Reset Password
              </h1>
            </div>

            <div className="space-y-5 mx-3.5 mt-10">
              <div className="">
                <div className="">
                  <h1 className="text-xs ">New Password</h1>
                </div>

                <div className="flex">
                  <AiOutlineLock className="mt-2 mr-1 " />
                  <input
                    type="password"
                    className="outline-none border-b focus:border-indigo-700 w-64 md:w-72"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-xs ">Confirm Password</h1>
                </div>

                <div className="flex">
                  <AiOutlineLock className="mt-2 mr-1 " />
                  <input
                    type="password"
                    className="outline-none border-b focus:border-indigo-700 w-64 md:w-72"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center my-10">
              <button className="text-white font-semibold bg-indigo-700 rounded-full text-sm sm:text-base px-6 sm:px-10 py-1 outline-none">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
