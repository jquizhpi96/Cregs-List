import { Link } from 'react-router-dom'
import {useState } from 'react'

import styled from "styled-components";
import Burger from './Burger'
import SideNav from './SideNav';

const Nav = styled.nav`
width: 100%;
height: 65px;
padding: 0 , 20px;
display: flex;
justify-content: space-around;

.header {
  color: #d64933; 
  font-size: 3rem;
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
      <div className="header">Cregs-List 😛</div>
      <Burger open={open}
        burgerToggle={burgerToggle}/>
      <SideNav burgerToggle={burgerToggle}/>
    </Nav>
      

        
      
     
  )
}

export default Navbar;