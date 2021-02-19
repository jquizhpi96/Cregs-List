import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";

function Dropdown(props) {
  const [click, setClick] = useState(false)

  const handleClick = ()=> setClick(!true)
  return 
  <div>
    <ul onclick={handleClick}
    className= {click ? `dropdown-name clicked` : `dropdown-name`}>

    </ul>
  </div>
}

export default Dropdown;
