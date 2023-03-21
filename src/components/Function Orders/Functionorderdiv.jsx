import React, { useRef } from "react";
import style from "./Functionorder.module.css";
import eventimg from "./5080346.jpg";
import next from "./next.svg";
import housewarming from "./housewarming.png";
import engage from "./engagement.png";
import marriage from "./marriage.png";
import babayshower from "./baby-shower.png";
import Packages from "./Packages";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_ALERT, SHOW_CONTACT_FORM } from "../../Redux/OrdercofigSlice";
import Alert from "react-bootstrap/Alert";
function Alertdiv(props) {
  const dispatch = useDispatch();
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
  });
  const show = useSelector((state) => state.Orderconfig.submited);
  if (show) {
    return (
      <Alert
        variant="success"
        style={{ height: match ? "90px" : "130px" }}
        onClose={() => dispatch(CLOSE_ALERT())}
        dismissible
      >
        <Alert.Heading style={{ fontSize: "20px" }}>
          Thanks for Contacting Us!
        </Alert.Heading>
        <p style={{ fontSize: "16px" }}>
          You will recive a email regarding this.
        </p>
      </Alert>
    );
  }
}
function Functionorderdiv(props) {
  const welcometext = useRef(null);
  // const [visble, setvisble] = useState(false);
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    const node = welcometext.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          setvisible(entry.isIntersecting);
        });
      },
      { threshold: 0.75 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
  });
  const scrollableDivRef = useRef(null);
  const [scrollAmount, setscrollAmount] = useState(0);
  useEffect(() => {
    // let scrollAmount = 0;
    const scrollStep = 0.4;
    const scrollInterval = setInterval(() => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.scrollLeft = scrollAmount;
        // scrollAmount += scrollStep;
        setscrollAmount(scrollAmount + scrollStep);
        if (scrollAmount >= scrollableDivRef.current.scrollWidth) {
          // scrollAmount = 0;
          setscrollAmount(0);
        }
      }
    }, 10);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [scrollAmount]);

  const dispatch = useDispatch();
  return (
    <>
      <div className={style.maindiv}>
        <Alertdiv />

        <div className={style.maindiv_content}>
          <img src={eventimg} alt="eventimage" />

          {visible ? (
            <p ref={welcometext}>
              Delicious food, delivered to your special event - satisfaction
              guaranteed.
              <div>
                <span>
                  Relax and enjoy your special events while we take care of the
                  food preparation and delivery - our expert chefs will create
                  mouth-watering dishes that will leave your guests wanting
                  more.
                </span>
              </div>
              <button onClick={() => dispatch(SHOW_CONTACT_FORM())}>
                Request a Call <img src={next} alt="arrow" />{" "}
              </button>
            </p>
          ) : (
            <p ref={welcometext}>
              Delicious food, delivered to your special event - satisfaction
              guaranteed.
              <div>
                <span>
                  Relax and enjoy your special events while we take care of the
                  food preparation and delivery - our expert chefs will create
                  mouth-watering dishes that will leave your guests wanting
                  more.
                </span>
              </div>
              <button onClick={() => dispatch(SHOW_CONTACT_FORM())}>
                Request a Call <img src={next} alt="arrow" />{" "}
              </button>
            </p>
          )}
        </div>

        <p id="testing" className={!match && style.mobileonly}>
          For the various events like...
        </p>
        <div ref={scrollableDivRef} className={style.listofevents}>
          <div className={style.listofeventscontent_div}>
            <img src={housewarming} alt="house_warming" />
            <span>House warming</span>
          </div>
          <div className={style.listofeventscontent_div}>
            <img src={engage} alt="house_warming" />
            <span>Engagement</span>
          </div>
          <div className={style.listofeventscontent_div}>
            <img src={marriage} alt="house_warming" />
            <span>Marriage</span>
          </div>
          <div id="observer_testing" className={style.listofeventscontent_div}>
            <img src={babayshower} alt="house_warming" />
            <span>Baby Shower</span>
          </div>
        </div>
      </div>

      <Packages />
    </>
  );
}

export default Functionorderdiv;
