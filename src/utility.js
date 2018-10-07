export const sameCard = (card1, card2) => {
  if (card1.number === card2.number && card1.type === card2.type) {
    return true;
  }

  return false;
};
