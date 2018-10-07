import React, { Component } from 'react';

import * as fns from './functions';
import { Wrapper, Button } from './styledComponents';
import Card from 'Card/';

class App extends Component {
  state = {
    cards: fns.initiateDeck(),
    currentCard: null,
  };

  shuffle = () => {
    const suffledCards = fns.shuffle(this.state.cards);
    this.setState({ cards: suffledCards });
  };

  dealOneCard = () => {
    const [card, ...remainingCards] = this.state.cards;
    this.setState({
      cards: remainingCards,
      currentCard: card,
    });
  };

  render() {
    const { currentCard, cards } = this.state;

    return (
      <Wrapper>
        <Button onClick={this.shuffle}>Shuffle</Button>
        <Button onClick={this.dealOneCard}>Deal one card</Button>
        {currentCard ? <Card {...currentCard} /> : null}
        <p>{cards.length} remaining cards</p>
      </Wrapper>
    );
  }
}

export default App;
