import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import Navbar from "./components/Nav/Navbar";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import About from "./components/About";

import "./bio.css";
import "./Footer.css";
import "./Form.css";
import "./nav.css";
import "./home.css";
import "./About.css";
import "./App.css";

function App() {
  const [creg, setCreg] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  return (
    <div className="App">
      <Navbar creg={creg} />

      <Route path="/about" component={About} />
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
