import React from "react";
import CreateAccount from "./Components/Authentication/Create Account/CreateAccount";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import ForgotPassword from "./Components/Authentication/Forget Password/Forgetpassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
