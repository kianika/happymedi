import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';




const SharedLayout = () => {

  return (
    
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    
  );
};

export default SharedLayout;