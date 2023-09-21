import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const ForgotPassword = () => {
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
                Forgot Password
              </h1>
            </div>

            <div className="space-y-5 mx-3.5 mt-10">
              <div className="">
                <div className="">
                  <h1 className="text-xs ">Email Address</h1>
                </div>

                <div className="flex ">
                  <BiUser className="mt-2 mr-1 " />
                  <input
                    type="text"
                    className="outline-none border-b focus:border-indigo-700 w-64 md:w-96"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center my-10">
              <button className="text-white font-semibold bg-indigo-700 rounded-full text-sm sm:text-base px-6 sm:px-10 py-1 outline-none">
                Send Link
              </button>
            </div>

            <div className="mx-8 my-10">
              <h1 className="text-xs md:text-sm text-center">
                Do you want to Reset the password?{" "}
                <Link
                  to="/resetpassword"
                  className="outline-none text-indigo-700 font-semibold"
                >
                  Reset Password
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
