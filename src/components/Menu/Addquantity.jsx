import React from "react";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
const style = {
  mobilemaindiv: {
    height: "25px",
    width: "4.5rem",
    // border:'1px solid grey',
    display: "flex",
    marginBottom: "10px",
    marginLeft: "5px",
    marginRight: "8px",
    padding: "1px",
    justifyContent: "space-between",
    position: "relative",
    bottom: "-7px",
    border: "1px solid grey",
    borderRadius: "20px",
  },
  maindiv: {
    height: "30px",
    width: "5rem",
    // border:'1px solid grey',
    display: "flex",
    marginBottom: "10px",
    marginLeft: "5px",
    marginRight: "8px",
    padding: "2px",
    justifyContent: "space-between",
    position: "relative",
    bottom: "-7px",
    border: "1px solid grey",
    borderRadius: "20px",
  },
  mobilebtn: {
    margin: 0,
    border: "none",
    borderRadius: "10px",
    backgroundColor: "grey",
    width: "40px",
    background: "transparent",
  },
  mobilebtnspan: {
    margin: "1px",
    position: "relative",
    bottom: "4px",
    fontSize: "16px",
  },
  mobilespantext: {
    margin: "-1px 0.1rem",
  },
  btn: {
    margin: 0,
    border: "none",
    borderRadius: "10px",
    backgroundColor: "grey",
    width: "50px",
    background: "transparent",
  },
  btnspan: {
    margin: "1px",
    position: "relative",
    bottom: "4px",
    fontSize: "20px",
  },
  spantext: {
    margin: "0 0.3rem",
  },
  delbtn: {
    fontSize: "16px",
  },
};

function AddQuantity(props) {
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
  });
  // const should_blur = useSelector((state) => state.Gstate.iscartclicked);

  // const[quantity,setquantity]=useState(1)
  // function handleclick(e){
  //     if(e.target.title === 'add'){
  //         const fun = props.action
  //         fun()

  //     }
  //     else{
  //         console.log('value is going to sub');
  //     }
  // }
  return (
    <>
      <div
        style={match ? style.maindiv : style.mobilemaindiv}
        className="container-sm "
      >
        <button
          onClick={props.add}
          disabled={props.hide && true}
          style={match ? style.btn : style.mobilebtn}
        >
          <span title="add" style={match ? style.btnspan : style.mobilebtnspan}>
            +
          </span>
        </button>
        <span style={match ? style.spantext : style.mobilespantext}>
          {props.quantity}
        </span>
        <button
          onClick={props.sub}
          disabled={props.hide && true}
          style={match ? style.btn : style.mobilebtn}
        >
          <span title="sub" style={match ? style.btnspan : style.mobilebtnspan}>
            -
          </span>
        </button>
      </div>
    </>
  );
}

export default AddQuantity;
