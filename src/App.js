import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Footer from "./components/Footer"

import "./bio.css"
import "./Footer.css"
import "./Form.css"
import './nav.css';
import "./home.css";
import "./App.css";

function App() {
  const [creg, setCreg] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  return (
    <div className="App">
      <Nav creg={creg} />

      <Route path="/new">
        <Form creg={creg} setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/">
        <div className="cregs-container">
          <Home creg={creg} />
        </div>
      </Route>
      <Route path="/bio/:id">
        <Bio creg={creg} setToggleFetch={setToggleFetch} />
      </Route>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
