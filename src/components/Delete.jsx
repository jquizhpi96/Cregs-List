import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";


function Delete(props) {
  const history = useHistory();

  const deleteProfile = async () => {
    const url = `{baseURL}/${props.cregs.id}`
    await axios.delete(url, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };
  

  return (
    
    <div className='delete'>
      
        <button onClick={deleteProfile}>Delete this Creg if you think he's not a Creg, Kreg, or some other way of spelling Creg!</button>
      {/* <Link to={`/edit/:id`}>
       <button>Edit</button>
      </Link> */}
      
    </div>

  )
}

export default Delete 