import styled from "styled-components";
import {useState } from 'react'

import SideNav from "./SideNav";

const StyleBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;
display: flex;

z-index: 999;
display: none;

@media (max-width: 750px){
  display: flex;
  justify-content: space-around;
flex-flow: column nowrap;
z-index: 999;
}

div{
  width: 2rem;
  height: 0.25rem;
  background-color: ${ ({ open }) => open ? `black` : `crimson`};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1){
    transform: ${ ({ open }) => open ? `rotate(45deg)` : `rotate(0)`};
  }
  &:nth-child(2){
    transform: ${ ({ open }) => open ? `translateX(100%)` : `translateX(0%)`};
     width: ${ ({ open }) => open ? `0` : ``};
    opcaity:${ ({ open }) => open ? `0` : `1`};
  }
  &:nth-child(3){
    transform: ${ ({ open }) => open ? `rotate(-45deg)` : `rotate(0)`};
  }
}
`


  ;

const Burger = ({burgerToggle, open}) => {

  return (
    <>
      <StyleBurger open={open} onClick={burgerToggle}>
        <div></div>
        <div></div>
        <div></div>
        <SideNav open={open} />
      </StyleBurger>
      
     </>
  )

}

export default Burger 