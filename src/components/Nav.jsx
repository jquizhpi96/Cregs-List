import { Link } from 'react-router-dom'
import Search from './Search'


function Nav(props) {
  
  return (
    <nav className="Nav">
     
      <h2 className="header">Cregs-List</h2>
     
      
      <ul>
      <Link className="Link"  to="/">Home</Link>
      
   
        <Link className="Linkform" to="/new">
          <button className="buttonform">Insert a Creg here!</button>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;