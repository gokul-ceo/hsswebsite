import React, { useEffect, useState } from "react";
import styles from "../../App.module.css";
import logo from "../../hss.png";
import { Link } from "react-router-dom";
function HFooter(props) {
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
      <div className={match ? styles.footerdiv : styles.mobilefooterdiv}>
        <div
          className={
            match
              ? styles.footercontentmaindiv
              : styles.mobilefootercontentmaindiv
          }
        >
          {!match && (
            <div
              className={match ? styles.morelinkdiv : styles.mobilemorelinkdiv}
            >
              <h6>Our Location</h6>
              <iframe
                title="location of sri saravana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.2178426589157!2d79.83051921444587!3d12.43520124120939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a531b6d8da9ccdf%3A0x904eb7a900c1894b!2sSri%20Saravana!5e0!3m2!1sen!2sin!4v1676722420939!5m2!1sen!2sin"
                // className={match ? styles.iprame : styles.mobileiprame}
                // style="border:0;"
                width={match ? "400" : "100%"}
                height={match ? "200" : "100"}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
          <div className={match ? styles.aboutusdiv : styles.mobileaboutdiv}>
            <h6>Contact us</h6>
            <p>Address: </p>
            <p>Nh Service road,Near Tamilnadu Mercantile Bank</p>
            <p>Melmaruvathur - 603319</p>
            <a href="tel:+919965258727">Contact: 9965258727</a>
            <a href="mailto:support@srisaravana.online">
              Email: support@srisaravana.online
            </a>
          </div>
          {match && (
            <div
              className={match ? styles.morelinkdiv : styles.mobilemorelinkdiv}
            >
              <h6>Our Location</h6>
              <iframe
                title="location of sri saravana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.2178426589157!2d79.83051921444587!3d12.43520124120939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a531b6d8da9ccdf%3A0x904eb7a900c1894b!2sSri%20Saravana!5e0!3m2!1sen!2sin!4v1676722420939!5m2!1sen!2sin"
                // className={match ? styles.iprame : styles.mobileiprame}
                // style="border:0;"
                width={match ? "400" : "100%"}
                height={match ? "200" : "100"}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div className={match ? styles.copyrightdiv : styles.mobilecopyrightdiv}>
        <div
          className={
            match ? styles.copyrightdivpolicy : styles.mobilecopyrightdivpolicy
          }
        >
          <Link to="/termsandconditions">Terms & conditions</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/refundpolicy">Refund Policy</Link>
        </div>
        <span>Design & developed by Sri Saravana</span>
        <span style={{ display: "block" }}>
          copyright ©️ {new Date(Date.now()).getFullYear()}
        </span>
      </div>
    </>
  );
}

export default HFooter;
