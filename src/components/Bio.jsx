import Delete from "./Delete";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";
import axios from "axios";
import instagram from "../Untitled-1.jpeg";
import facebook from "../facebook.png";
import twitter from "../twitter.png";
import Modal from "./Modal";

function Bio(props) {
  const [creg, setCreg] = useState("");
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getCregs = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records);

      const creg = resp.data.records.find((creg) => creg.id === params.id);
      setCreg(creg);
    };
    getCregs();
  }, []);

  if (!creg) {
    return <h4>loading....</h4>;
  }

  return (
    <div className="container">
      <img className="img" src={creg.fields.imageURL} />

      <h2 className="name">{creg.fields.name}</h2>
      <h4 className="age">Age: {creg.fields.age}</h4>
      <h4 className="location">Location: {creg.fields.location}</h4>
      <h3 className="bio">{creg.fields.bio}</h3>
      <ul className="socialmedia">
        <a className="social" href={creg.fields.socialMediaHandle}>
          <img className="insta" src={instagram} alt="instagram" />
        </a>
        <a className="social" href={creg.fields.facebook}>
          <img className="facebook" src={facebook} alt="instagram" />
        </a>
        <a className="social" href={creg.fields.twitter}>
          <img className="twitter" src={twitter} alt="instagram" />
        </a>
      </ul>

      {/* <button className='delete' onClick={()=> setIsOpen(true)}>Open Modal</button> */}
      <Delete
        className="delete"
        creg={creg}
        setToggleFetch={props.setToggleFetch}
      />
      {/* <Modal  creg={creg} setToggleFetch={props.setToggleFetch}
        isOpen={isOpen}
        onClose={ ()=> setIsOpen(false)}/> */}
    </div>
  );
}

export default Bio;
