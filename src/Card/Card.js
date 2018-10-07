import React from 'react';

import { CARD_TYPES } from 'constants.js';
import { Type } from './styledComponents';

const Card = ({ number, type }) => {
  const typeIcon = {
    [CARD_TYPES.DIAMOND]: '♦',
    [CARD_TYPES.CLUB]: '♣',
    [CARD_TYPES.HEART]: '♥',
    [CARD_TYPES.SPADE]: '♠',
  };
  return (
    <div>
      {number} <Type type={type}>{typeIcon[type]}</Type>
    </div>
  );
};

export default Card;
