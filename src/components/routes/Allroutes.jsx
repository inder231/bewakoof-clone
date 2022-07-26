import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import LoginSignUp from "../pages/LoginSignUp";
import MensPage from "../pages/MensPage";
import MobileCovers from "../pages/MobileCovers";
import Product from "../pages/Product";
import WomensPage from "../pages/WomensPage";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/mens/:productId" element={<Product />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mobilecovers" element={<MobileCovers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-signup" element={<LoginSignUp/>} />
      </Routes>
    </>
  );
};

export default Allroutes;
