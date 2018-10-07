import * as fns from './utility';

describe('sameCard function', () => {
  const card1 = { number: 1, type: 'heart' };

  it('returns true if cards are identical', () => {
    const card2 = { number: 1, type: 'heart' };

    expect(fns.sameCard(card1, card2)).toBeTruthy();
  });

  it('returns true if cards are not identical', () => {
    expect(fns.sameCard(card1, { number: 2, type: 'heart' })).toBeFalsy();
    expect(fns.sameCard(card1, { number: 1, type: 'club' })).toBeFalsy();
  });
});
