import React, { Component } from "react";
import Splash from "./screens/Splash/Splash";
import Home from "./screens/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Splash} />
          <Route path="/Home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
