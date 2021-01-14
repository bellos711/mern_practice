import logo from './logo.svg';
import './App.css';
import {Link, Redirect, Router} from "@reach/router";
import Home from "./views/Home";
import NumberURL from "./views/NumberURL";
import MultiPathURL from "./views/MultiPathURL"

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <NumberURL path="/:variable" />
        <MultiPathURL path="/:theWord/:color1/:color2" />
        


        <Redirect from="/" to="/home" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
