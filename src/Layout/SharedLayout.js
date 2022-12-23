import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import NewsLetter from "../components/NewsLetter/NewsLetter";




const SharedLayout = () => {

  return (
    
    <div>
      <Header />
      <Outlet />
      <NewsLetter />
      <Footer />
    </div>
    
  );
};

export default SharedLayout;