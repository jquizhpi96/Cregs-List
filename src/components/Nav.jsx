import {Link} from 'react-router-dom'
function Nav() {
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/new">Insert a Creg here!</Link>
    </nav>
  )
}

export default Nav;