import React, { useState, useEffect } from "react";
import styles from "../../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CHOOSE_ORDER_MODE } from "../../Redux/OrdercofigSlice";
// import HFooter from "../Footer/Footer";
// import Menufooter from "../Footer/Menufooter";
function OnlineOrderPage(props) {
  // const year = new Date().getFullYear();
  const dispatch = useDispatch();
  // const [ordertype, setordertype] = useState("takeaway");
  const ordertype = useSelector((state) => state.Orderconfig.Ordermode);
  const [customername, setcustomername] = useState("");
  const [customernumber, setcustomernumber] = useState("");
  const [locationaccepted, setlocationaccepted] = useState(false);
  const [locationerror, setlocationerror] = useState("");
  const handlenamechange = (e) => {
    setcustomername(e.target.value);
  };
  const handlenumberchange = (e) => {
    if (customernumber.length < 10) {
      setcustomernumber(e.target.value);
    } else {
      setcustomernumber("");
      console.log("Please enter the correct phonenumber.");
    }
  };
  const [timing, settiming] = useState("5");

  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
    if (match) {
      console.log("Desktop or laptop Interface");
    } else {
      console.log("Mobile Interface");
    }
  }, [match]);
  useEffect(() => {
    function showError(error) {
      setlocationaccepted(false);
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setlocationerror("User denied the permission");
          break;
        case error.POSITION_UNAVAILABLE:
          setlocationerror("Location information is unavailable");
          break;
        case error.TIMEOUT:
          setlocationerror("The request is timed out!");
          break;
        case error.UNKNOWN_ERROR:
          setlocationerror("An unknown error occurred!");
          break;
        default:
          break;
      }
    }
    function showPosition(position) {
      console.log("Your latitude - ", position.coords.latitude);
      console.log("Your longitude - ", position.coords.longitude);
    }
    if (ordertype === "Delivery") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
  }, [ordertype]);
  const handleclick = (e) => {
    dispatch(CHOOSE_ORDER_MODE(e.target.value));
  };
  const handleselect = (e) => {
    settiming(e.target.value);
    console.log("Selected timing:", timing);
  };
  return (
    <>
      <div className={match ? styles.herodiv : styles.mobileherodiv}>
        <div
          className={
            match ? styles.herocontentdiv : styles.mobileherocontentdiv
          }
        >
          <p className={match ? styles.herodivtext : styles.mobileherodivtext}>
            {match
              ? `Satisfy your hunger pangs with our quick and reliable food delivery
            service, get your food in 30 minutes or less!`
              : `Get your food delivered in 30 minutes or less!`}
          </p>
          {/* <button className={match ? styles.orderbtn : styles.mobileorderbtn}>
            Order now
          </button> */}
        </div>
      </div>
      <div
        className={match ? styles.secondmaindiv : styles.mobilesecondmaindiv}
      >
        <div
          className={
            match
              ? styles.deliverytype_selectiondiv
              : styles.mobiledeliverytype_selectiondiv
          }
        >
          <div className={match ? styles.dtsd_main : styles.mobiledtsd_main}>
            <div
              className={
                match ? styles.delivery_type : styles.mobiledelivery_type
              }
            >
              <button
                style={{
                  backgroundColor:
                    ordertype === "takeaway" ? "#D32626" : "#fff",
                  color: ordertype === "takeaway" ? "white" : "black",
                }}
                onClick={handleclick}
                value="takeaway"
              >
                Takeaway
              </button>
              <button
                style={{
                  backgroundColor:
                    ordertype === "delivery" ? "#D32626" : "#fff",
                  color: ordertype === "delivery" ? "white" : "black",
                }}
                onClick={handleclick}
                value="delivery"
              >
                Delivery
              </button>
            </div>
            {ordertype === "takeaway" ? (
              <>
                <input
                  type="text"
                  value={customername}
                  onChange={handlenamechange}
                  placeholder="Enter your name"
                  className={match ? styles.inputtext : styles.mobileinputtext}
                />
                <input
                  type="Number"
                  onChange={handlenumberchange}
                  value={customernumber}
                  pattern="[1-9]{1}[0-9]{9}"
                  maxLength="10"
                  placeholder="Enter your Phone"
                  className={match ? styles.inputtext : styles.mobileinputtext}
                />
                <label
                  className={
                    match ? styles.timinglable : styles.mobiletiminglable
                  }
                  for="timing"
                >
                  When do you want your parcel ?{" "}
                </label>
                <select
                  className={
                    match ? styles.selectoption : styles.mobileselectoption
                  }
                  id="timing"
                  value={timing}
                  onChange={handleselect}
                  name="delivery_timing"
                >
                  <option value="5">After 5 min</option>
                  <option value="10">After 10 min</option>
                  <option value="15">After 15 min</option>
                </select>
                <span
                  className={
                    match ? styles.timingspan : styles.mobiletimingspan
                  }
                >
                  You can collect your parcel after {timing} minutes.
                </span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={customername}
                  onChange={handlenamechange}
                  placeholder="Enter your name"
                  className={match ? styles.inputtext : styles.mobileinputtext}
                />
                <input
                  type="Number"
                  value={customernumber}
                  onChange={handlenumberchange}
                  placeholder="Enter your Phone"
                  className={match ? styles.inputtext : styles.mobileinputtext}
                />
                <input
                  type="text"
                  placeholder="Enter your Address"
                  className={match ? styles.inputtext : styles.mobileinputtext}
                />
                {!locationaccepted && (
                  <span
                    className={
                      match ? styles.loacationerror : styles.mobilelocationerror
                    }
                  >
                    {locationerror}
                  </span>
                )}
              </>
            )}
            <div className={styles.ordernowdiv}>
              <button>Proceed to order</button>
            </div>
          </div>
        </div>
        {/* <Menufooter /> */}
      </div>
    </>
  );
}

export default OnlineOrderPage;
