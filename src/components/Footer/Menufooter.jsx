import React, { useEffect, useState } from "react";
import menustyle from "../Menu/menupage.module.css";
import { Link } from "react-router-dom";
function Menufooter(props) {
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );
  useEffect(() => {
    window.matchMedia("(min-width:768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
    });
  }, []);
  return (
    <>
      <div
        className={match ? menustyle.menufooter : menustyle.mobilemenufooter}
      >
        <Link to="/termsandconditions">Terms & conditions</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/refundpolicy">Refund Policy</Link>
        <div
          className={
            match ? menustyle.menufootercrdiv : menustyle.mobilemenufootercrdiv
          }
        >
          <span></span>
          <span style={{ display: "block" }}>
            copyright ©️ {new Date(Date.now()).getFullYear()}
          </span>
        </div>
      </div>
    </>
  );
}

export default Menufooter;
