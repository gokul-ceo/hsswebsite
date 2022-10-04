import React from "react";
// import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navbar/Navbar";
import Imagediv from "./Imagediv/Imagediv";
import Orderdiv from "./Ordertaking/OrderDiv";



export const App = () => {
  return (
    <>
     <Navigation/>
     <Imagediv/>
     <Orderdiv/>
    </>
  );
};
