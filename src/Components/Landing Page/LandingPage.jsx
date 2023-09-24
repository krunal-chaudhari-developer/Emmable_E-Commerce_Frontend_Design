import React from "react";
import Navbar from "../Navbar/Navbar";
import Sale from "../Sale/Sale";
import general from "../../assets/general 1.jpeg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="my-8 flex justify-center">
        <img src={general} alt="banner" className="rounded-xl w-[800px] h-60" />
      </div>
      <div className="mb-5">
        <Sale />
      </div>
    </>
  );
};

export default LandingPage;
