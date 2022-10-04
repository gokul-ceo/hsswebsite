import React from "react";
import styled from "styled-components";
import img from './spoon.png'
import click from './click.png'
import background from './background.jpg'
import  { useMediaQuery } from 'media-query-react'
const Introdiv = styled.div`
height:200px;
width:100%;
text-align:center;
background-image:url(${background});
opacity:0.75;
background-size:contain;


object-fit:cover;
margin-top:20px;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const Slogan = styled.p`
font-size:${props => props.desktop?"40px":"30px"};
font-weight:bold;


color:#FF0022;`

const OrderNow = styled.button`
border:2px solid red;
// border:none;
background-color:#EDFDF8;

border-radius:20px;
height:50px;
width:200px;
`
const style ={
    imagestyle:{
        height:'20px',
        width:'20px',
        position:'relative',
        left:'-5px',
        top:'-5px'
 
        
    }
}


function Imagediv(){
    const isMobile =  useMediaQuery({query:'max-width:480px'});
    const isDesktop = useMediaQuery({query:'min-width:1024px'})
    console.log("isMobile =",isMobile);
    console.log("isDesktop =",isDesktop);
    return <>
    <Introdiv >

        {isMobile && 
        <>
            <Slogan>
            You can't <br/>
            eat here <br/>
            just <br/>
           <u style={{textDecorationColor:'white'}}> once.</u>
        </Slogan>
        <img style={style.imagestyle} src={img} alt="spoon_image"></img>
        </>
        }
        {
            isDesktop&&
            <>
            <Slogan desktop >
                You can't eat here just<u style={{textDecorationColor:'green'}}> once.</u>
            </Slogan>
            <OrderNow><img src={click} style={style.imagestyle} alt="click_image"/>Order Now!</OrderNow>
            </>
        }
    </Introdiv>


    </>
}
export default Imagediv;