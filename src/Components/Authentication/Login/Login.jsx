import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const Login = () => {
  return (
    <>
      <div className="font-custom">
        <div className="flex px-4 py-2 my-1 justify-between">
          <h1 className="text-indigo-700 font-bold text-2xl">Emmable</h1>
        </div>

        <div className="flex justify-center">
          <div className="md:border md:shadow-xl my-20 rounded-3xl md:px-10">
            <div className="text-center my-5">
              <h1 className="text-4xl font-bold text-indigo-600">Login</h1>
            </div>

            <div className="space-y-5 mx-3.5 mt-10">
              <div className="">
                <div className="">
                  <h1 className="text-xs ">User Name or Email</h1>
                </div>

                <div className="flex ">
                  <BiUser className="mt-2 mr-1 " />
                  <input
                    type="text"
                    className="outline-none border-b focus:border-indigo-700 w-64 md:w-72"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-xs ">Password</h1>
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

            <div className="flex justify-end mx-3 md:mx-5 my-3">
              <Link
                to="/forgotpassword"
                className="text-xs hover:text-indigo-700 outline-none font-semibold"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex justify-center my-10">
              <button className="text-white bg-indigo-700 rounded-full px-10 py-1 outline-none">
                Login
              </button>
            </div>

            <div className="mx-8 my-10">
              <h1 className="text-xs md:text-sm">
                Do you have an account?{" "}
                <Link
                  to="/createaccount"
                  className="outline-none text-indigo-700 font-semibold"
                >
                  Create Account
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
