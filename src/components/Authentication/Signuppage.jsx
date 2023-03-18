import React, { useEffect, useRef, useState } from "react";
import style from "./authpage.module.css";
import { Link } from "react-router-dom";
import gi from "./googleicon.svg";
function Signuppage(props) {
  const nameinputref = useRef(null);
  const [error, seterror] = useState("");

  const [nameerror, setnameerror] = useState(false);
  const [submitmessage, setsubmitmessage] = useState("");
  const [disable, setdisable] = useState(true);
  const [Userdetails, setUserdetails] = useState({
    customername: "",
    customerphone: "",
    customeremail: "",
    customeragreed: false,
  });
  useEffect(() => {
    if (Userdetails.customerphone.trim().length >= 11) {
      seterror("Please enter 10 digit mobile number.");
    }
  }, [Userdetails.customerphone]);
  function handlechange(e) {
    seterror("");
    setnameerror(false);
    const { name, value } = e.target;
    if (name === "customeragreed") {
      if (Userdetails.customeragreed) {
        setUserdetails((prevstate) => ({
          ...prevstate,
          customeragreed: true,
        }));
      }
    }

    setUserdetails((prevstate) => ({ ...prevstate, [name]: value }));
  }
  useEffect(() => {
    if (Userdetails.customeragreed) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  }, [Userdetails]);
  function handlesumbit(e) {
    e.preventDefault();
    if (Userdetails.customername === "" || Userdetails.customerphone === "") {
      setnameerror("Please fill all the fields!");
    } else if (Userdetails.customerphone.length !== 10) {
      seterror("Please enter 10 digit mobile number.");
    } else if (!Userdetails.customeragreed) {
      setnameerror("Agree to the terms and conditions to continue..");
    } else {
      setsubmitmessage("Successfully Created a Account!");
    }
  }
  return (
    <>
      <div className={style.maindiv}>
        <div className={style.inputentrydiv}>
          <h1>Sign up</h1>
          {nameerror && <span style={{ color: "red" }}>{nameerror}</span>}
          {submitmessage && (
            <span style={{ color: "darkgreen" }}>{submitmessage}</span>
          )}
          <span>Enter your username:</span>
          <input
            className={style.fun}
            ref={nameinputref}
            name="customername"
            onChange={handlechange}
            value={Userdetails.customername}
            required
            placeholder="your name here.."
            type="text"
          />

          <span>Enter your phone number:</span>
          <input
            name="customerphone"
            type="number"
            onChange={handlechange}
            value={Userdetails.customerphone}
            required
            placeholder="your phone number.."
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <span>Enter your email:</span>
          <input
            name="customeremail"
            type="email"
            onChange={handlechange}
            placeholder="your mail id (optional)"
          />
          <div className={style.agreement}>
            <span>
              <input
                checked={Userdetails.customeragreed}
                name="customeragreed"
                type="checkbox"
                onChange={handlechange}
              />
              I agree to{" "}
              <Link to="/termsandconditions"> terms & conditions</Link> and{" "}
              <Link to="/privacypolicy">Privacy policy.</Link>
            </span>
          </div>
          <button disabled={disable} onClick={handlesumbit}>
            Sign Up
          </button>
          <span style={{ alignSelf: "center" }}>Or</span>

          <div className={style.googlebtn} style={{ textAlign: "center" }}>
            <button>
              {" "}
              <img src={gi} alt="google_icon" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signuppage;
