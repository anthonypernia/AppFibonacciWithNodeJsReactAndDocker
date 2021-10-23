import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OterPage from "./OterPage";
import Fib from "./Fib";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OterPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
