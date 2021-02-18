import Delete from "./Delete"
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import photo from '../Untitled-1.jpeg'

function Bio(props) {
  const [creg, setCreg] = useState("");
  const params = useParams()
  
useEffect(() => {
    const getCregs = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records);
     
      const creg =  resp.data.records.find((creg) =>
        creg.id === params.id
      )
      setCreg(creg)
    };
    getCregs();
  }, []);
  
  if (!creg) {
    return <h4>loading....</h4>
  }
 
  return (
    <div className="container" >
      <img className="img"src={creg.fields.imageURL} />
      
      <h2 className="name">{creg.fields.name}</h2>
      <h4 className="age">Age: {creg.fields.age}</h4>
      <h4 className="location">Location: {creg.fields.location}</h4>
      <h3 className="bio">{creg.fields.bio}</h3>
      <a className="social"href={creg.fields.socialMediaHandle}>
        {/* <h5>Instagram</h5> */}
        <img className="insta"src={photo} alt="instagram"/>
        </a>
        <Delete className="delete" creg={creg} setToggleFetch={props.setToggleFetch}/>
    
      
     
      
    </div>
  
  );
  
  }



export default Bio