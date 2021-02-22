import { Link } from 'react-router-dom'
import styled from "styled-components";




const NavElements = styled.nav`
.nav-links{
display: flex;
list-style: none;
margin: 0px;

align-items: center;
margin-right: 15px;

}
.Link:hover,
.Linkform:hover {
 color:white;
}

.Link,
.Linkform{
  text-decoration: none;
  font-size: 18px;
  padding: 10px 10px;
    color: #2ec4b6;
  transition: all ease-in-out 250ms;
}


.buttonform{
  margin-top: 0;
}
.buttonform:hover {
  color: #2ec4b6;
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