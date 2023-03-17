import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../hss.png";
import { Link } from "react-router-dom";
function NavBar(props) {
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

            <a className={styles.navlistele} href="#.">
              Bulk Order
            </a>
            <a className={styles.navlistele} href="..">
              My orders
            </a>
            <a className={styles.navlistele} href="#.">
              Contact us
            </a>

            <a className={styles.navlistele} href="..">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
