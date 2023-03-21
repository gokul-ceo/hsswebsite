import React, { useEffect, useRef, useState } from "react";
import style from "./authpage.module.css";
import { Link } from "react-router-dom";
import gi from "./googleicon.svg";
import spin from "./Spin.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signuppage(props) {
  const nameinputref = useRef(null);
  const [error, seterror] = useState("");

  const [nameerror, setnameerror] = useState(false);
  const [submitmessage, setsubmitmessage] = useState("");
  const [loading, setloading] = useState(false);
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
  function handlelogin() {
    window.open("http://localhost:5000/auth/login", "_self");
  }
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
  const notify = () => toast("Wow its working");
  function handlesumbit(e) {
    e.preventDefault();

    if (Userdetails.customername === "" || Userdetails.customerphone === "") {
      setnameerror("Please fill all the fields!");
    } else if (Userdetails.customerphone.length !== 10) {
      seterror("Please enter 10 digit mobile number.");
    } else if (!Userdetails.customeragreed) {
      setnameerror("Agree to the terms and conditions to continue..");
    } else {
      setloading(true);
      console.log("Userdetails:", Userdetails);
      fetch("http://localhost:5000/user/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Userdetails),
      })
        .then((response) => {
          response.json();
          if (response.ok) {
            toast.success("Successfully signed up!");
          } else {
            toast.error(`Couldn't sign up!`);
          }
        })
        .then((data) => {
          setloading(false);
          return data;
        });
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
            {loading ? (
              <div
                class="spinner-border text-light spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
          <span style={{ alignSelf: "center" }}>Or</span>

          <div className={style.googlebtn} style={{ textAlign: "center" }}>
            <button onClick={handlelogin}>
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
