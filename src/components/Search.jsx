import { useState, useEffect, } from "react";
import { Link } from "react-router-dom";

function Search (props) {
  const [name, setName] = useState("");
  const[ allTheCregs, setAllTheCregs] = useState([])

  useEffect(() =>  {
  const filteredNames = props.creg.filter((creg) => 
    creg.fields ?.name ?.toLowerCase().includes(name.toLowerCase())
  );
  setAllTheCregs(filteredNames)
  
  
  }, [name])  
   
  return (
    <div className="search-container">
      
      <input
        type="text"
        placeholder="Search for the Creg..."
        value={name}
         onChange={(e) => setName(e.target.value)}
      />
      
      {allTheCregs.map((creg) => (
        <Link key={creg.id} to={`/bio/${creg.id}`}>
          
          <img className= "image"src={creg.fields.imageURL} />
          <h3 className= "name"> {creg.fields.name}</h3>
        </Link>
         
      ))}
    </div>
  );

};


export default Search;

