import {  useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";


function Delete(props) {
  const history = useHistory();

  const deleteProfile = async () => {
    const url = `${baseURL}/${props.creg.id}`
    await axios.delete(url, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };
  

  return (
    
    <div className='delete'>
          
      <button onClick={deleteProfile}>Delete this Creg</button>
      {/* <h3> Are you sure?</h3> */}
     
      
    </div>

  )
}

export default Delete 