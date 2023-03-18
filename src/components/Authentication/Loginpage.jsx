import React, { useEffect, useState } from "react";
import style from "./authpage.module.css";

function Loginpage(props) {
  const [error, seterror] = useState("");
  const [customerphone, setcustomerphone] = useState("");
  function handlechange(e) {
    seterror("");
    setcustomerphone(e.target.value);
  }
  //   useEffect(() => {
  //     if (customerphone.length >= 11) {
  //       seterror("Mobile number should be 10 digits.");
  //     } else if (customerphone.length !== 10) {
  //       seterror("Mobile number should not be less than 10 digits.");
  //     }
  //   }, [customerphone]);
  return (
    <>
      <div>
        <div className={style.loginpagemaindiv}>
          <div className={style.logininputdiv}>
            <h1>Login</h1>
            {error && <span style={{ color: "red" }}>{error}</span>}
            <span>Enter your Mobile Number:</span>
            <input
              value={customerphone}
              onChange={handlechange}
              type="number"
              placeholder="your number here.."
            />

            <input
              className={style.emailinput}
              type="email"
              placeholder="enter your email (optional)"
            />
            <span style={{ fontSize: "14px" }}>
              (Otp will be sent to your email too.)
            </span>
            <button disabled={error}>Send OTP</button>
            <div className={style.otpinputdiv}>
              <span>Enter otp recived:</span>
              <input type="number" placeholder="Enter your otp..!" />
              <button>Verify</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
