import React, { useState, useEffect } from "react";
// import styled from "styled-components";

import welcomeimage from "./websiteimg_1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

import logo from "./hss.png";
import ordernow from "./order-now.png";
import NavBar from "./components/Navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { CHOOSE_ORDER_MODE, SHOW_CONTACT_FORM } from "./Redux/OrdercofigSlice";
import HFooter from "./components/Footer/Footer";
import Functionorderdiv from "./components/Function Orders/Functionorderdiv";
import Orderonlinediv from "./components/Onlineorder/Orderonlinediv";
import Contactform from "./components/Contactform/Contact_form";

export const Home = () => {
  const dipatch = useDispatch();
  const showform = useSelector((state) => state.Orderconfig.Showcontactform);
  return (
    <>
      <Functionorderdiv />
      <Orderonlinediv />
      <Contactform show={showform} onHide={() => SHOW_CONTACT_FORM()} />
      <HFooter />
    </>
  );
};
