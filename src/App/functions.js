import { CARD_TYPES } from 'constants.js';

export const initiateDeck = () => {
  const cards = [];

  CARD_TYPES.forEach(type => {
    for (let i = 1; i <= 13; i++) {
      cards.push({
        number: i,
        type,
      });
    }
  });

  return cards;
};
