import { Link } from 'react-router-dom'
import styled from "styled-components";




const NavElements = styled.nav`
.nav-links{
display: flex;
list-style: none;

justify-content: space-around;
align-items: center;

}

.Link,
.Linkform {
  text-decoration: none;
  font-size: 20px;
  padding: 10px 10px;
    color: #d64933;
  transition: all ease-in-out 250ms;
}

.Link:hover,
.Linkform :hover,
.buttonform:hover {
  color: #92dce5;
 
}
.buttonform{
  margin-top: 0;
}
@media screen and (max-width: 711px) {
  
display: none;
   

}`


function navElements({open, burgerToggle}) {
 
 
  return (
    <NavElements open={open} burgerToggle={burgerToggle} >
   <ul  className= "nav-links" >
     <Link className="Link" to="/">Home</Link>
     <Link className="Link" to="/about">About</Link>
    <Link className="Linkform" to="/new">
       <button className="buttonform">Insert a Creg here!</button>
     </Link>
      </ul>
      </NavElements>
      
  )
}

export default navElements;