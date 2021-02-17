import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Bio from "./components/Bio";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [cregs, setCregs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  return (
    <div className="App">
      <h1>Cregs-List</h1>
      <Nav />
      <Route path="/new">
        <Form cregs={cregs} setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/">
        <div className="cregs-container">

          <Home creg={cregs} />

        </div>
      </Route>
    </div>
  );
}

export default App;
