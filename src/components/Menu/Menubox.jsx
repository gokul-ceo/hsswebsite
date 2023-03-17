import React from "react";
import menustyle from "./menupage.module.css";
import image from "./intropic.webp";
import { useState, useEffect } from "react";
import AddQuantity from "./Addquantity";
import tick from "./tick.png";
import veg from "./veg.svg";
function Menubox(props) {
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
  });
  const showaddbtn = props.showaddbtn;
  const [quantity, setquantity] = useState(0);
  const [selected, setselected] = useState(false);
  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const itemName = cap(props.name);
  // const handleadditem = () => {
  //   setselected(!selected);
  // };
  const itemprice = props.price;
  function handleincrease() {
    setquantity(quantity + 1);
  }
  function handledecrease() {
    if (quantity !== 0) {
      setquantity(quantity - 1);
    }
  }

  return (
    <>
      <div className={menustyle._tempmenubox}>
        <img alt="veg" src={veg} style={{ width: "20px", height: "20px" }} />
        <span style={{ width: "200px" }}>{itemName}</span>
        <span>₹{itemprice}</span>
      </div>
      {/* <div className={match ? menustyle.menubox : menustyle.mobilemenubox}>
        <img alt="menu item" src={image} />
        <div
          className={
            match
              ? menustyle.menuboxpartition
              : menustyle.mobilemenuboxpartition
          }
        >
          <div
            className={
              match ? menustyle.namepartition : menustyle.mobilenamepartition
            }
          >
            <span id="testing">{itemName}</span>
          </div>
          <div
            className={
              match
                ? menustyle.actionpartition
                : menustyle.mobileactionpartition
            }
          >
            <span>{props.price}/piece</span>
            {showaddbtn && (
              <AddQuantity
                quantity={quantity}
                add={handleincrease}
                sub={handledecrease}
              />
            )}
            {showaddbtn && (
              <button
                onClick={() => props.addfunction(itemName, quantity, itemprice)}
                className={menustyle.addbtn}
              >
                {selected ? (
                  <img
                    alt="tick"
                    style={{ height: "20px", width: "20px" }}
                    src={tick}
                  />
                ) : (
                  "Add"
                )}
              </button>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Menubox;
