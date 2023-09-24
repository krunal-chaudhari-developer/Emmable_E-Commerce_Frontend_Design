import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className={`shadow-lg shadow-gray-100 ${openSearch && "pb-5"}`}>
          <div className="flex px-4 py-2 my-1 justify-between">
            <div className="">
              <h1 className="text-indigo-700 font-bold text-2xl">Emmable</h1>
            </div>

            <div className="hidden md:block">
              <div className="flex border border-gray-100 rounded-md overflow-hidden">
                <div className="md:hidden block">
                  <button className="flex bg-gray-100 hover:bg-gray-200 rounded-l-sm space-x-1 p-1">
                    <AiOutlineUnorderedList className="mt-1" />
                    <h1 className="">Category</h1>
                  </button>
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Search in Text"
                    className="xl:w-[900px] md:w-96 p-1 outline-none"
                  />
                </div>
                <div className="bg-indigo-700 rounded-r-sm ">
                  <AiOutlineSearch
                    size={20}
                    className="text-white mx-2 my-1.5"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-5 ">
              <div className="md:hidden block">
                <AiOutlineSearch
                  onClick={() => setOpenSearch(!openSearch)}
                  size={20}
                  className="mx-2 mt-2"
                />
              </div>
              <FaShoppingCart size={20} className="text-gray-600 mt-1.5" />
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate("/login")}
                  className="border border-indigo-700 text-indigo-700 font-semibold px-4 rounded-lg"
                >
                  Login
                </button>
                <div className="md:hidden block">
                  <Menu>
                    <MenuHandler>
                      <div className="mt-1.5">
                        <BsThreeDotsVertical size={20} className="" />
                      </div>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Menu Item 1</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                      <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden block">
            <div className="flex justify-center">
              {openSearch && (
                <>
                  <div className="flex border w-fit rounded-md mx-10 ">
                    <input
                      type="text"
                      placeholder="Search in Text"
                      className="w-[200px] p-1 outline-none"
                    />

                    <h1 className="text-white bg-indigo-700 rounded-r-sm px-3 py-0.5">
                      Search
                    </h1>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
