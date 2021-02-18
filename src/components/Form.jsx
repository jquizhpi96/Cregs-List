import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";


function Form(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.creg.length > 0 && params.id) {
      const findCreg = props.cregs.find((creg) => params.id === creg.id);

      if (findCreg) {
        setName(findCreg.fields.name);
        setAge(findCreg.fields.age);
        setLocation(findCreg.fields.location);
        setBio(findCreg.fields.bio);
        setSocialMediaHandle(findCreg.fields.socialmediaHandle);
        setImageURL(findCreg.fields.imageURL);
      }
    }
  }, [props.cregs, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      age,
      location,
      bio,
      socialMediaHandle,
      imageURL,
    };
    console.log(fields);
    
    if (params.id) {
      const cregURL = `${baseURL}/${params.id}`;
      await axios.put(cregURL, { fields }, config);
      
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Age:</label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label> Tell us about yourself:</label>
      <textarea
        type="text"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <label> Instagram:</label>
      <input
        type="text"
        value={socialMediaHandle}
        onChange={(e) => setSocialMediaHandle(e.target.value)}
      />
      <label> Image URL:</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
