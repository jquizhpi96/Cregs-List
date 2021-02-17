import { Route, Link } from "react-router-dom";
import Delete from "./Delete"

function Bio(props) {
  const { name, age, location, bio, socialMedia, imageURL } = props.cregs.fields;
  return (
   
    <div key={props.cregs._id}>
      
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h4>{location}</h4>
      <h3>{bio}</h3>
      <h5>{socialMedia}</h5>
      <img src={imageURL}/>
      <Delete/>
      
    </div>
  
  )
}


export default Bio