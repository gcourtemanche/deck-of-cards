import * as fns from './functions';
import { CARD_TYPES } from 'constants.js';
import { sameCard } from 'utility.js';

describe('initiateDeck function', () => {
  it('returns a 52 cards deck', () => {
    expect(fns.initiateDeck()).toEqual([
      { number: 1, type: 'CLUB' },
      { number: 2, type: 'CLUB' },
      { number: 3, type: 'CLUB' },
      { number: 4, type: 'CLUB' },
      { number: 5, type: 'CLUB' },
      { number: 6, type: 'CLUB' },
      { number: 7, type: 'CLUB' },
      { number: 8, type: 'CLUB' },
      { number: 9, type: 'CLUB' },
      { number: 10, type: 'CLUB' },
      { number: 11, type: 'CLUB' },
      { number: 12, type: 'CLUB' },
      { number: 13, type: 'CLUB' },
      { number: 1, type: 'DIAMOND' },
      { number: 2, type: 'DIAMOND' },
      { number: 3, type: 'DIAMOND' },
      { number: 4, type: 'DIAMOND' },
      { number: 5, type: 'DIAMOND' },
      { number: 6, type: 'DIAMOND' },
      { number: 7, type: 'DIAMOND' },
      { number: 8, type: 'DIAMOND' },
      { number: 9, type: 'DIAMOND' },
      { number: 10, type: 'DIAMOND' },
      { number: 11, type: 'DIAMOND' },
      { number: 12, type: 'DIAMOND' },
      { number: 13, type: 'DIAMOND' },
      { number: 1, type: 'HEART' },
      { number: 2, type: 'HEART' },
      { number: 3, type: 'HEART' },
      { number: 4, type: 'HEART' },
      { number: 5, type: 'HEART' },
      { number: 6, type: 'HEART' },
      { number: 7, type: 'HEART' },
      { number: 8, type: 'HEART' },
      { number: 9, type: 'HEART' },
      { number: 10, type: 'HEART' },
      { number: 11, type: 'HEART' },
      { number: 12, type: 'HEART' },
      { number: 13, type: 'HEART' },
      { number: 1, type: 'SPADE' },
      { number: 2, type: 'SPADE' },
      { number: 3, type: 'SPADE' },
      { number: 4, type: 'SPADE' },
      { number: 5, type: 'SPADE' },
      { number: 6, type: 'SPADE' },
      { number: 7, type: 'SPADE' },
      { number: 8, type: 'SPADE' },
      { number: 9, type: 'SPADE' },
      { number: 10, type: 'SPADE' },
      { number: 11, type: 'SPADE' },
      { number: 12, type: 'SPADE' },
      { number: 13, type: 'SPADE' },
    ]);
  });
});

describe('shuffle function', () => {
  const cards = fns.initiateDeck();
  const suffledCards = fns.shuffle(cards);

  it('tests that all 52 cards are there', () => {
    CARD_TYPES.forEach(type => {
      for (let i = 1; i <= 13; i++) {
        const find = suffledCards.find(suffledCard => {
          const card = { number: i, type };
          return sameCard(card, suffledCard);
        });

        expect(find).toEqual({ type, number: i });
      }
    });
  });

  // This test could mathematically fails because of the randomness of the function
  it('tests that the shuffle is effective', () => {
    let exactCount = 0;

    for (let i = 0; i < 52; i++) {
      const suffledCard = suffledCards[i];
      const card = cards[i];

      if (sameCard(suffledCard, card)) {
        exactCount++;
      }
    }
    expect(exactCount).toBeLessThan(5);
  });
});
