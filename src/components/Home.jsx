import { Route, Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

import { useEffect, useState } from "react";

function Home(props) {
  const [cregs, setCregs] = useState([]);
  const [name, setName] = useState("");
  const[ allTheCregs, setAllTheCregs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getCregs = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setCregs(resp.data.records);
     
      if (resp.data.records) {
        setAllTheCregs(resp.data.records.filter((creg) => {
          return creg.fields?.name?.toLowerCase().includes(name.toLowerCase())
        }
  ));
  
      }
    };
    getCregs();
  }, [name, toggleFetch]);

  return (
 
    <div>
      <input className="Search"
        type="text"
        placeholder="Search for the Creg..."
        value={name}
         onChange={(e) => setName(e.target.value)}
        />
   
     <div className="Container">
      {allTheCregs.map((creg) => (
        <Link key={creg.id} to={`/bio/${creg.id}`}>
          
          <img className= "image"src={creg.fields.imageURL} />
          <h3 className= "name"> {creg.fields.name}</h3>
        </Link>
         
      ))}
        </div>
     
    </div>
  );
}
export default Home;
