import React, { useState } from "react";
import CreateAccount from "./Components/Authentication/Create Account/CreateAccount";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import ForgotPassword from "./Components/Authentication/Forget Password/Forgetpassword";
import ResetPassword from "./Components/Authentication/Reset Password/ResetPassword";
import Otp from "./Components/Authentication/Otp/Otp";
import LandingPage from "./Components/General Landing Page/Landing Page/LandingPage";
import SingleProduct from "./Components/Single Product/SingleProduct";
import axios from "axios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
