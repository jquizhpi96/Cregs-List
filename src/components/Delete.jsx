import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Delete(props) {
  const deleteProfile = async () => {
    const cregURL= `${baseURL}/${props.cregs.id}`;
    await axios.delete(cregURL, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div className='delete'>
      <button onClick={deleteProfile}>Delete Profile</button>
      <Link to={`/edit/${props.cregs.id}`}>
      <button>Edit</button>
      </Link>
    </div>

  )
}

export default Delete 