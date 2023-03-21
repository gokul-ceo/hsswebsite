import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { CLOSE_ALERT, SHOW_CONTACT_FORM } from "../../Redux/OrdercofigSlice";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";

function Contactform(props) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [comments, setcomments] = useState("");
  const [error, seterror] = useState("");
  const [agree, setagree] = useState(false);
  // const [showbtn, setshowbtn] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      seterror("Please fill your name!");
    } else if (phone === "") {
      seterror("Please fill your phone number!");
    } else if (comments === "") {
      seterror("Reason should not be blank!");
    } else if (phone.length >= 11) {
      seterror("Phone number should be 10 digits!");
    } else if (phone.length < 10) {
      seterror("Phone number should not be less than 10 digits!");
    } else if (!agree) {
      seterror(
        "Agree to terms & conditions and Privacy Policy to continue our service!"
      );
    } else {
      seterror("");
      dispatch(SHOW_CONTACT_FORM());
      setname("");
      setphone("");
      setcomments("");
      setagree(false);
      dispatch(CLOSE_ALERT());
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.main}>
            {error && <div className={style.errordiv}>{error}</div>}
            <span>Enter your name:</span>
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              placeholder="John"
            />
            <span>Enter your Phone number:</span>
            <input
              onChange={(e) => setphone(e.target.value)}
              value={phone}
              type="number"
              placeholder="99652587272"
            ></input>
            <span>Reason for Contacting ?</span>
            <textarea
              value={comments}
              onChange={(e) => setcomments(e.target.value)}
              placeholder="Your reasons here.."
            ></textarea>
          </div>
          <div className={style.agreediv}>
            <input
              checked={agree}
              onChange={() => setagree(!agree)}
              type="checkbox"
            />
            <span>
              I agree to <Link>Terms&conditions</Link> and{" "}
              <Link>Privacy Policy</Link>
            </span>
            <div style={{ display: "flex" }} className={style.btngroup}>
              <button
                style={{ backgroundColor: "white", color: "#D32626" }}
                onClick={() => dispatch(SHOW_CONTACT_FORM())}
              >
                Close
              </button>
              <button onClick={handlesubmit}>Done</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => dispatch(SHOW_CONTACT_FORM())}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contactform;
