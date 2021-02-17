import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";


function Delete(props) {
  const deleteProfile = async () => {
    const url = `${baseURL}/${props.creg.id}`
    await axios.delete(url, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    
    <div className='delete'>
      <button onClick={deleteProfile}>Delete Profile</button>
      <Link to={`/edit/${props.creg.id}`}>
       <button>Edit</button>
        </Link>
    </div>

  )
}

export default Delete 