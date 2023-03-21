import React, { useState } from "react";
import menustyle from "./menupage.module.css";
import { Offcanvas } from "react-bootstrap";
import rmv from "./delete.png";
import { useDispatch, useSelector } from "react-redux";
import { Updatemenuitem } from "../../Redux/OrderArraySlice";
import {
  CHOOSE_PAYMENT_MODE,
  INFO_PAYMENTINTIATED,
} from "../../Redux/OrdercofigSlice";

const OffCanvas = (props) => {
  const dispatch = useDispatch();
  // const Paymentmode = useSelector((state) => state.Orderconfig.Paymentmode);
  const Orderarray = useSelector((state) => state.Orderarray.OrderArray);
  const [cash, setcash] = useState(false);
  const [upi, setupi] = useState(false);
  function handleclick(e) {
    console.log(e.target.value);
    if (e.target.value === "cash") {
      setcash(true);
      setupi(false);
      dispatch(CHOOSE_PAYMENT_MODE("cash"));
    } else {
      setupi(true);
      setcash(false);
      dispatch(CHOOSE_PAYMENT_MODE("upi"));
    }
  }
  const Ordermode = useSelector((state) => state.Orderconfig.Ordermode);
  const Paymentprocess = useSelector(
    (state) => state.Orderconfig.Paymentintiated
  );
  function CartBox(props) {
    const { itemname, quantity, price } = props;
    const handleDeleteItem = () => {
      dispatch(Updatemenuitem(itemname));
    };

    return (
      <>
        <div className={menustyle.cartitembox}>
          <span style={{ width: "100px" }}>{itemname}</span>
          <span>{quantity}</span>
          <span style={{ marginRight: "5px" }}>{price}</span>
          <img
            style={{ marginLeft: "5px" }}
            onClick={handleDeleteItem}
            src={rmv}
            alt="delete"
          />
        </div>
      </>
    );
  }
  return (
    <Offcanvas show={props.show} onHide={props.onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={menustyle.cartdiv}>
          <div className={menustyle.cartmaindiv}>
            <div className={menustyle.cartitemdivheading}>
              <span>ItemName</span>
              <span>Quantity</span>
              <span>Price</span>
            </div>
            <div className={menustyle.cartscrolldiv}>
              {Orderarray.map((item, index) => (
                <CartBox
                  key={index}
                  quantity={item.quantity}
                  price={item.price}
                  itemname={item.name}
                />
              ))}
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
              <CartBox itemname="testing-name" />
            </div>
            <div className={menustyle.cartorderdetails}>
              <span>Order details</span>
              <table>
                <tbody>
                  <tr>
                    <th>Amount</th>
                    <td>₹300</td>
                  </tr>
                  <tr>
                    <th>Quantity</th>
                    <td>4</td>
                  </tr>
                  <tr>
                    <th>
                      Discount <span>10% off</span>
                    </th>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>₹270</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {Ordermode === "delivery" && (
              <div className={menustyle.paymentchoosediv}>
                <div id="cash" className={menustyle.ptype}>
                  <input
                    onChange={handleclick}
                    checked={cash}
                    value="cash"
                    type="checkbox"
                  />
                  <span>Cash on Delivery</span>
                </div>
                <div id="upi" className={menustyle.ptype}>
                  <input
                    onChange={handleclick}
                    checked={upi}
                    value="upi"
                    type="checkbox"
                  />
                  <span>Upi/Netbanking</span>
                </div>
              </div>
            )}
            {Ordermode === "takeaway" && (
              <div className={menustyle.paymentchoosediv}>
                <div id="cash" className={menustyle.ptype}>
                  <input
                    onChange={handleclick}
                    checked={cash}
                    value="cash"
                    type="checkbox"
                  />
                  <span>Cash on collecting</span>
                </div>
                <div id="upi" className={menustyle.ptype}>
                  <input
                    onChange={handleclick}
                    checked={upi}
                    value="upi"
                    type="checkbox"
                  />
                  <span>Upi/Netbanking</span>
                </div>
              </div>
            )}
            <div className={menustyle.procceedtocheckoutdiv}>
              <button
                onClick={() => dispatch(INFO_PAYMENTINTIATED())}
                disabled={Paymentprocess}
              >
                {Paymentprocess ? "Processing.." : "Procced to checkout"}
              </button>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
