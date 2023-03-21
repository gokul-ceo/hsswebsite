import React, { useEffect, useRef } from "react";
import style from "./Functionorder.module.css";
import next from "./rednext.svg";
import { useDispatch } from "react-redux";
import { SHOW_CONTACT_FORM } from "../../Redux/OrdercofigSlice";
function Packages(props) {
  const dispatch = useDispatch();
  const item = useRef(null);
  useEffect(() => {
    const node = item.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          // item.current.classList.add(style.test);
          // setvisible(entry.isIntersecting);
        });
      },
      { threshold: 0.75 }
    );
    if (node.current) {
      observer.observe(node);
    }
    return () => observer.unobserve(node);
  }, []);
  return (
    <>
      <div className={style.packagesmaindiv}>
        <span ref={item}>For business & Organisations</span>
        <div className={style.pkgdetail_div}>
          <p>We can provide food & snacks based on your requirements daily.</p>
        </div>
        <button
          onClick={() => {
            dispatch(SHOW_CONTACT_FORM());
          }}
        >
          Contact us <img src={next} alt="arrow" />{" "}
        </button>
        <small id="notes">
          *only for customers around Melmaruvathur,Sothupakkam & Acharapakkam.
        </small>
      </div>
    </>
  );
}

export default Packages;
