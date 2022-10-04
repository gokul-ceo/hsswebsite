import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const Ordermaindiv = styled.div`
height:20rem;
margin-top:10px;
width:100%;
`
const Selectdiv = styled.div`
margin-top:2rem;
text-align:center;
height:25px;
width:300px;
margin:1rem auto;
border-radius:10px;
`
const Type = styled.span`
font-size:22px;
font-weight:bold;
margin:0 10px;
`
const Slash = styled.span`
font-size:30px;
font-weight:bold;
`
function Orderdiv(){
    return <>
    <Ordermaindiv>
    <Selectdiv>
        <div className="container-sm p-2">
        <Type>TakeAway</Type><Slash>/</Slash><Type>Delivery</Type>
        <div className="container-sm my-4">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@gmail.com" />
                <label for="floationInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@gmail.com" />
                <label for="floationInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@gmail.com" />
                <label for="floationInput">Phone Number</label>
            </div>
        </div>
        </div>
    </Selectdiv>
    </Ordermaindiv>
    </>

}

export default Orderdiv;