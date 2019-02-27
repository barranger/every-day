import React, { Component } from "react";
import {QuoteProvider} from "./providers/QuoteProvider";
import Splash from "./screens/Splash/Splash";
import Home from "./screens/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <QuoteProvider>
          <Route exact path="/" component={Splash} />
          <Route path="/Home" component={Home} />
        </QuoteProvider>
      </Router>
    );
  }
}

export default App;
