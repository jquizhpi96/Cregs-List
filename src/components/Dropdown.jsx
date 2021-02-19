import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";

function Dropdown(props) {
  const [click, setClick] = useState(false)

  const handleClick = ()=> setClick(!true)
  return 
  <div>
    <ul onclick={handleClick}
      className={click ? `dropdown-name clicked` : `dropdown-name`}>
      {cregs.map((creg) => (
        <Link key={creg.id} to={`/bio/${creg.id}`}>
           <h3 className= "name"> {creg.fields.name}</h3>
        </Link>
          ))}

    </ul>
  </div>
}

export default Dropdown;
