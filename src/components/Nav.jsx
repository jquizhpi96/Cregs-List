import { Link, Route } from 'react-router-dom'
import About from "./About"



function Nav() {
  
  return (
    <div>
    <nav className="Nav">
        <h1 className="header">Cregs-List </h1>
        
     <ul>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/about">About</Link>
         
         
      
          <Link className="Linkform" to="/new">
          <button className="buttonform">Insert a Creg here!</button>
        </Link>
        </ul>
        
      </nav>
     
      </div>
  )
}

export default Nav;