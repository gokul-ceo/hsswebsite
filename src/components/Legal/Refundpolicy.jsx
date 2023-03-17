import React from "react";
import Menufooter from "../Footer/Menufooter";
import style from "./legal.module.css";

function Refundpolicy(props) {
  return (
    <>
      <div className={style.rpmaindiv}>
        <h1>Refund Policy</h1>
        <h3>Refund & Return</h3>
        <div>
          <p>
            At Sri Saravana Restaurant, we take great care to ensure that the
            food we serve is of the highest quality. While we strive for
            perfection with every order, if you are not satisfied for any
            reason, please feel free to email us at{" "}
            <a href="mailto:support@srisaravana.online">
              support@srisaravana.online
            </a>{" "}
            or call us at + 91 9965 258 727 so we can make it right.
          </p>
        </div>
        <h3>Cancellations</h3>
        <div>
          <p>
            (Bulk Orders, Party Orders, Corporate Orders, and Catering) In case
            you wish to cancel, after your order has been confirmed, we may be
            able to reschedule the order for a different date upon request or
            you can avail of free cancellation if cancelled 48 hours prior to
            the date of order.
          </p>
        </div>
      </div>
      <Menufooter />
    </>
  );
}

export default Refundpolicy;
