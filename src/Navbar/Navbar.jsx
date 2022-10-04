import React from "react";
import styled from "styled-components";
const Navbar = styled.div`
  height: 2rem;
  width: 100%;
  margin: 0;
  background-color: white;
  border: 1px solid red;
  text-align: center;

  h1 {
    color: red;
    margin: 0 auto;
    font-family: sans-serif;
    font-size: 25px;
    font-weight: semi-bold;
    text-shadow: 0 2px 3px grey;
  }
`;

const style={
    listul:{
        listStyleType:'none',
        display:'flex',
        heigth:'20px'
        
        
    },
    listitem:{
        borderBottom:'1px solid red',
        borderWidth:'3px'
        
        
    }
}


function Navigation(){
    return <>
     <Navbar>
        <h1>Sri Saravana</h1>
      </Navbar>
      {/* <Smallnavbar> */}
        <ul className="nav  justify-content-center">
            <li style={style.listitem} className="nav-item mx-3">Home</li>
            <li style={style.listitem} className="nav-item mx-3">Menu</li>
            <li style={style.listitem}className="nav-item mx-3">Order Now</li>
        </ul>
      {/* </Smallnavbar> */}
    </>
}

export default Navigation;