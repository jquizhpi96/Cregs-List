import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Footer from "./components/Footer"
import "./home.css";
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
      <Route path="/edit/:id">
        <Form cregs={cregs} setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/">
        <div className="cregs-container">
          <Home creg={cregs} />
        </div>
      </Route>
      <Route path="/bio/:id">
        <Bio cregs={cregs} />
      </Route>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
