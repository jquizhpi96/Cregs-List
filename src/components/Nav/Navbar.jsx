import { Link } from 'react-router-dom'
import {useState } from 'react'

import styled from "styled-components";
import Burger from './Burger'

import NavElements from './NavElements';


const Nav = styled.nav`
width: 100%;
height: 65px;
padding: 0 , 20px;
display: flex;
justify-content: space-between;
 background-color: #1e0e5e;

padding-top: 20px;
padding-bottom: 20px;

.header {
  color:#F9DBBD; 
  font-size: 3rem;
  padding-left: 20px;
  font-weight: bold;
  animation: glow 1s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }

}
`

function Navbar() {
  
  const [open, setOpen] = useState(false)
  const burgerToggle = () => {
    setOpen(!open)
}
 
  return (
  <Nav>
      <div className="header">Cregs-List </div>
      <Burger open={open}
        burgerToggle={burgerToggle} />
     <NavElements open={open}/>
    </Nav>
      

        
      
     
  )
}

export default Navbar;