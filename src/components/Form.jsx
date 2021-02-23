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
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
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
        setFacebook(findCreg.fields.facebook);
        setTwitter(findCreg.fields.twitter);
        setImageURL(findCreg.fields.imageURL);
      }
    }
  }, [props.creg, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      age,
      location,
      bio,
      socialMediaHandle,
      facebook,
      twitter,
      imageURL,
    };
    console.log(fields);

    await axios.post(baseURL, { fields }, config);

    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        className="formInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label>Age:</label>
      <input
        className="formInput"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <br />
      <label>Location:</label>
      <input
        className="formInput"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <br />
      <label> Tell us about yourself:</label>
      <textarea
        type="text"
        placeholder="Who this?"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />
      <br />
      <label> Instagram:</label>
      <input
        className="formInput"
        type="text"
        value={socialMediaHandle}
        onChange={(e) => setSocialMediaHandle(e.target.value)}
      />
      <br />
      <label> Facebook:</label>
      <input
        className="formInput"
        type="text"
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
      />
      <br />
      <label> Twitter:</label>
      <input
        className="formInput"
        type="text"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <br />
      <label> Image URL:</label>
      <input
        className="formInput"
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        required
      />
      <button type="submit">Submit Creg</button>
    </form>
  );
}

export default Form;
