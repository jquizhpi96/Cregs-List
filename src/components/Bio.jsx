import Delete from "./Delete"
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import { useParams } from 'react-router-dom'


import axios from 'axios'

function Bio(props) {
  const [cregs, setCregs] = useState([]);
  const params = useParams()
  console.log(params.id)
  
useEffect(() => {
    const getCregs = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setCregs(resp.data.records);
    };
    getCregs();
  }, []);
  

 
//match params id with prop id to get data
  
  
  return (
    <div>
      <h2></h2>
      
    </div>
  
  );
  
  }



export default Bio