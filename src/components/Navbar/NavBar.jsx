import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../hss.png";
import { Link } from "react-router-dom";
function NavBar(props) {
  function handlelogin() {
    // window.open("http://localhost:5000/auth/login", "_self");
  }
  function scrollTocontact() {
    var contactsession = document.getElementById("contact");
    contactsession.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav
      id={styles.navbarhss}
      className="navbar navbar-expand-lg sticky-top bg-body-tertiary"
    >
      <div className="container-fluid ">
        {/* <a className="navbar-brand" href="#"> */}
        <Link to="/">
          <img
            src={logo}
            alt="sri saravana logo"
            style={{ width: "100px", height: "50px", borderRadius: "50%" }}
          />
        </Link>

        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/menu"
              className={styles.navlistele}
              aria-current="page"
              href="#."
            >
              Menu
            </Link>

            {/* <a className={styles.navlistele} href="#.">
              Bulk Order <small className={styles.cmslable}>comming soon</small>
            </a> */}
            {/* <a className={styles.navlistele} href="..">
              My Account
            </a> */}
            <a
              className={styles.navlistele}
              onClick={scrollTocontact}
              href="#."
            >
              Contact us
            </a>
            {/* 
            <Link
              to="/signup"
              onClick={handlelogin}
              className={styles.navlistele}
              href=".."
            >
              Sign up
            </Link>
            <Link
              to="/login"
              onClick={handlelogin}
              className={styles.navlistele}
              href=".."
            >
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
