import React, {Component} from 'react';
import quotes from '../data/quotes';

const QuoteContext = React.createContext();

class QuoteProvider extends Component {
  state = {
    quotes
  }

  render() {
    return (
      <QuoteContext.Provider value={this.state}>
        {this.props.children}
      </QuoteContext.Provider>
    )
  }
}

export {QuoteProvider, QuoteContext};