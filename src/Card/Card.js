import React from 'react';

import { CARD_TYPES } from 'constants.js';

const Card = ({ number, type }) => {
  const typeIcon = {
    [CARD_TYPES.DIAMOND]: '♦',
    [CARD_TYPES.CLUB]: '♣',
    [CARD_TYPES.HEART]: '♥',
    [CARD_TYPES.SPADE]: '♠',
  };
  return (
    <div>
      {number} {typeIcon[type]}
    </div>
  );
};

export default Card;
