import React from "react";
import style from "./Orderonline.module.css";
import next from "./next.svg";
import icon from "./delivery-icon.png";
function Orderonlinediv(props) {
  return (
    <>
      <div className={style.orderonlinemaindiv}>
        <img src={icon} alt="delivery icon" />
        <span>Get your food delivered within 30 minutes or less!</span>
        <button>
          {/* Order Now <img src={next} alt="arrow" />{" "} */}
          Coming soon..
        </button>
      </div>
    </>
  );
}

export default Orderonlinediv;
