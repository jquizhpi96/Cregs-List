import Delete from "./Delete"
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Bio() {
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
  
 //conditional to make sure u have object in state.
  if (!creg) {
    return <h4>loading....</h4>
  }
  
 
  
 
//match params id with prop id to get data
  
  
  return (
    <div>
      <h2>{creg.fields.name}</h2>
      <h4>{creg.fields.age}</h4>
      <h4>{creg.fields.location}</h4>
      <h3>{creg.fields.bio}</h3>
      <a href={creg.fields.socialMediaHandle}>
        <h5>Instagram</h5>
        </a>
      <img src={creg.fields.imageURL} />
      <Delete/>
      
    </div>
  
  );
  
  }



export default Bio