import React, { Component } from "react";
import Quotes from "./data/quotes";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    var index = Math.floor(Math.random() * Quotes.length);
    var quote = Quotes[index];
    
    var self = this;
    this.state = {
      quote,
      timer: setInterval(() => {
        self.setState({quote: Quotes[Math.floor(Math.random() * Quotes.length)]});
      }, 3000) 
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            {this.state.quote.text}
            <br />
            <small>~{this.state.quote.author}</small>
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
