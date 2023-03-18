import React, { useEffect, useState } from "react";
import menustyle from "./menupage.module.css";
import Menubox from "./Menubox";
import open from "./slideup.png";
import rmv from "./delete.png";
import up from "./up-arrow-svgrepo-com.svg";
import mobileinfo from "./mobileinfo.png";
import OffCanvas from "./Cartcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Addmenuitem, Updatemenuitem } from "../../Redux/OrderArraySlice";
import Breakfast from "./Breakfast";
import {
  Info_Fetch_Menu,
  Info_Fetch_Menu_FAILURE,
  Info_Fetch_Menu_SUCCESS,
} from "../../Redux/Menuavailablereducer";
import Menufooter from "../Footer/Menufooter";
function MenuPage(props) {
  // const bf_catagory = ['Idly','Dosa','Pongal','All']
  // cosnt l_catagory = ['Meals','Variety Rice','']
  const [showaddbtn, setshowaddbtn] = useState(false);
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
    if (match) {
      setshowaddbtn(false);
    } else {
      setshowaddbtn(true);
    }
  }, [match]);
  const dispatch = useDispatch();
  const Orderarray = useSelector((state) => state.Orderarray.OrderArray);
  const totalcost = useSelector((state) => state.Orderarray.totalCost);
  const Menulist = useSelector((state) => state.MenuFetcher.MenuList);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [menuboxerror, setmenuboxerror] = useState(false);
  const [Breakfast, setbreakfast] = useState(true);
  const [Lunch, setlunch] = useState(false);
  const [Dinner, setdinner] = useState(false);
  const handlebreakfast = () => {
    setbreakfast(true);
    setlunch(false);
    setdinner(false);
  };
  const handlelunch = () => {
    setbreakfast(false);
    setlunch(true);
    setdinner(false);
  };
  const handledinner = () => {
    setbreakfast(false);
    setlunch(false);
    setdinner(true);
  };

  const toggleOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas);
  };
  // const [width, setWindowWidth] = useState(0);
  // const [cartshow, setcartshow] = useState(true);
  // const [cartbtn, setcartbtn] = useState(false);
  useEffect(() => {
    async function Menufetch() {
      dispatch(Info_Fetch_Menu());
      fetch(`http://localhost:4000/customer/menu?type=All`)
        .then((response) => response.json())
        .then((data) => {
          console.log(`Menu feteched from the server:`, data);
          dispatch(Info_Fetch_Menu_SUCCESS(data));
        })
        .catch((error) => {
          dispatch(Info_Fetch_Menu_FAILURE(error));
        });
    }
    Menufetch();
  }, [dispatch]);
  // useEffect(() => {
  //   updateDimensions();

  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);
  // useEffect(() => {
  //   if (Orderarray.length > 0) {
  //     setcartbtn(true);
  //   } else {
  //     setcartbtn(false);
  //   }
  // }, [Orderarray.length]);
  useEffect(() => {
    console.log("OrderArray:", Orderarray);
  }, [Orderarray]);
  // const updateDimensions = () => {
  //   const width = window.innerWidth;

  //   if (width < 1200) {
  //     setcartshow(false);
  //   } else {
  //     setcartshow(true);
  //   }
  //   setWindowWidth(width);
  // };
  const [cartitems, setcartitems] = useState([]);
  const [query, setquery] = useState("");
  useEffect(() => {
    if (Breakfast) {
      setquery("M");
    } else if (Lunch) {
      setquery("L");
    } else {
      setquery("D");
    }
  }, [Breakfast, Lunch, Dinner]);
  const handleadditem = (name, quantity, price) => {
    if (quantity !== 0) {
      const newitem = {
        name: name,
        quantity: quantity,
        price: price,
      };
      setcartitems([...cartitems, newitem]);
      dispatch(Addmenuitem(newitem));
    }
  };
  useEffect(() => {
    console.log("Cartitems list:", cartitems);
  }, [cartitems]);

  return (
    <>
      <div
        id="main_div"
        className={match ? menustyle.menumain : menustyle.mobilemenumain}
      >
        <div className={match ? menustyle.menudiv : menustyle.mobilemenudiv}>
          {!match && (
            <div
              className={!match ? menustyle.mobiletimingselection_div : null}
            >
              <button>Breakfast</button>
              <button>Lunch</button>
              <button>Dinner</button>
            </div>
          )}
          {/* <div className={menustyle.catagory_main}> 
            <h6>Select Catagory</h6>                               //future feature 

          </div> */}

          <div className={menustyle.mastermenudisplay}>
            {match && (
              <div className={menustyle.menutimelist}>
                <h6>Menu Timing</h6>
                <ul>
                  <li
                    className={Breakfast && menustyle.selected_mtl}
                    onClick={handlebreakfast}
                  >
                    Breakfast
                  </li>
                  <li
                    className={Lunch && menustyle.selected_mtl}
                    onClick={handlelunch}
                  >
                    Lunch
                  </li>
                  <li
                    className={Dinner && menustyle.selected_mtl}
                    onClick={handledinner}
                  >
                    Dinner
                  </li>
                </ul>
              </div>
            )}

            <div
              id="scrollablediv"
              className={
                match ? menustyle.menudisplay : menustyle.mobilemenudisplay
              }
            >
              {Menulist?.filter((item) => item.Type.includes(query)).map(
                (item) => {
                  return (
                    <Menubox
                      onerror={menuboxerror}
                      name={item.Item}
                      price={item.Price}
                      showaddbtn={showaddbtn}
                      addfunction={handleadditem}
                    />
                  );
                }
              )}
              <div style={{ height: "100px" }}></div>
            </div>
          </div>

          {!match && (
            <img
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className={menustyle.topbtn}
              src={up}
              alt="Up_arrow"
            />
          )}
        </div>

        {/* <OffCanvas
          show={showOffCanvas}
          cart={cartitems}
          deleteaction={updatecart}
          onHide={() => setShowOffCanvas(false)}
        /> */}
        {match && (
          <div className={menustyle.orderinginfo}>
            <img src={mobileinfo} alt="mobile" />
            <p>Use Mobile device to order your Menu.</p>
          </div>
        )}
      </div>
      {/* New Feature --launch after customer onboard */}
      {/* {!match && (
        <div
          onClick={() => toggleOffCanvas()}
          className={menustyle.cart_footerdiv}
          id="Mobile_cart_div_footer"
        >
          <div className={menustyle.cart_content_div}>
            <h5>Cart</h5>
            <div
              onClick={() => setShowOffCanvas(true)}
              className={menustyle.quantity_div}
            >
              <span>{Orderarray.length}</span>
              <img
                src={open}
                alt="opent_title"
              />
            </div>
            <div className={menustyle.total_div}>
              <span>Total:</span>
              <span className={menustyle.numbertotal}>₹{totalcost}</span>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default MenuPage;
