import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaRegAddressCard } from "react-icons/fa";

const CreateAccount = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="font-custom">
        <div className="flex px-4 py-2 my-1 justify-between">
          <h1 className="text-indigo-700 font-bold text-2xl">Emmable</h1>
        </div>

        <div className="flex justify-center">
          <div className="md:border md:shadow-xl rounded-3xl md:px-5">
            <div className="text-center my-5">
              <h1 className="text-3xl font-bold text-indigo-600">
                Create Account
              </h1>
            </div>

            <div className="space-y-5 mx-3.5 mt-10">
              <div className="">
                <div className="">
                  <h1 className="text-xs ">User Name or email id</h1>
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
                  <h1 className="text-xs ">Home Address</h1>
                </div>

                <div className="flex ">
                  <FaRegAddressCard className="mt-2 mr-1 " />
                  <input
                    type="text"
                    className="outline-none border-b focus:border-indigo-700 w-64 md:w-72"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-xs ">Contact No.</h1>
                </div>

                <div className="flex my-2">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    className="border-none"
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
              <button
                onClick={() => navigate("/otp")}
                className="text-white font-semibold bg-indigo-700 rounded-full px-10 py-1 outline-none"
              >
                Create Account
              </button>
            </div>

            <div className="m-12 md:m-10">
              <h1 className="text-xs md:text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="outline-none text-indigo-700 font-semibold"
                >
                  Login
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
