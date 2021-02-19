import {Link} from 'react-router-dom'
function Nav() {
  
  return (
    <nav className="Nav">
     
      <h2 className="header">Cregs-List</h2>
     
      
      <ul>
      <Link className="Link"  to="/">Home</Link>
      
        
        <Link className="Linkform" to="/new">
          <button className="buttonform">Insert a Creg here!</button>
        </Link>
      </ul>
      {/* <h3>A Home for the Cregs, Kraigs, and however you spell Creg. </h3> */}
    </nav>
  )
}

export default Nav;