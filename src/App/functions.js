import { CARD_TYPES } from 'constants.js';

// Returns a deck of fifty-two playing cards in four suits: hearts, spades, clubs, diamonds,
// with face values of Ace, 2-10, Jack, Queen, and King.
export const initiateDeck = () => {
  const cards = [];

  Object.values(CARD_TYPES).forEach(type => {
    for (let i = 1; i <= 13; i++) {
      cards.push({
        number: i,
        type,
      });
    }
  });

  return cards;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const shuffle = cards => {
  const shuffledCards = [];
  const remainingCards = [...cards];

  // Shuffle by removing cards one by one from the remainingCards
  for (let i = 0; i < cards.length; i++) {
    // Get a random number between 0 and the number of remaining card in the remainingCards stack
    const cardIndex = getRandomInt(remainingCards.length);

    // Put the ramdomly selected card on the top of the shuffledCards stack
    shuffledCards.push(remainingCards[cardIndex]);

    // Remove the ramdomly selected card from the remainingCards stack
    remainingCards.splice(cardIndex, 1);
  }

  return shuffledCards;
};
