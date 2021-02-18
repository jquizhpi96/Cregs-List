import { Route, Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

import { useEffect, useState } from "react";

function Home(props) {
  const [cregs, setCregs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getCregs = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setCregs(resp.data.records);
    };
    getCregs();
  }, [toggleFetch]);

  return (
    <div>
      {cregs.map((creg) => (
        <Link key={creg.id} to={`/bio/${creg.id}`}>
          
          <img className= "image"src={creg.fields.imageURL} />
          <h3 className= "name"> {creg.fields.name}</h3>
        </Link>
         
      ))}
     
    </div>
  );
}
export default Home;
