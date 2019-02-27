import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { QuoteContext } from "../../providers/QuoteProvider";
import "./Splash.css";

class Splash extends Component {
  constructor(props) {
    super();
    setTimeout(() => {
      props.history.push("/Home");
    }, 3000);
  }

  render() {

    return (
      <div className="Splash">
        <header className="Splash-header">
          <QuoteContext.Consumer>
            {context => {

              var index = Math.floor(Math.random() * context.quotes.length);
              var quote = context.quotes[index];
              return (
                <h2>
                  {quote.text}
                  <br />
                  <small>~{quote.author}</small>
                </h2>
              );
            }}
          </QuoteContext.Consumer>
        </header>
      </div>
    );
  }
}

Splash.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(Splash);
