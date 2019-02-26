import React, { Component } from "react";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import Quotes from "../../data/quotes";
import "./Splash.css";

class Splash extends Component {
  constructor(props) {
    super();
    var index = Math.floor(Math.random() * Quotes.length);
    var quote = Quotes[index];
    this.state = { quote };
    
    setTimeout(() => { 
      props.history.push("/Home") }, 3000) 
  }

  render() {
    return (
      <div className="Splash">
        <header className="Splash-header">
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

Splash.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(Splash);