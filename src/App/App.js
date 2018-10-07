import React, { Component } from 'react';

import * as fns from './functions';
import { Wrapper, Button } from './styledComponents';

class App extends Component {
  state = {
    cards: fns.initiateDeck(),
  };

  shuffle = () => {
    const suffledCards = fns.shuffle(this.state.cards);
    this.setState({ cards: suffledCards });
  };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.shuffle}>Shuffle</Button>
        <Button>Deal one card</Button>
      </Wrapper>
    );
  }
}

export default App;
