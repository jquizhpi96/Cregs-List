import {Link} from 'react-router-dom'
function Nav() {
  
  return (
    <nav className="Nav">
     <h2 className= "header">Cregs-List</h2>
      <Link className="Link" to="/">Home</Link>
      
      <Link className="Link" to="/new">Insert a Creg here!</Link>
    </nav>
  )
}

export default Nav;