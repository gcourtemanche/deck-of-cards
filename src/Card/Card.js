import React, { Fragment } from 'react';

import { CARD_TYPES } from 'constants.js';
import { Wrapper, Type, LeftTop, RightBottom } from './styledComponents';

const typeIcon = {
  [CARD_TYPES.DIAMOND]: '♦',
  [CARD_TYPES.CLUB]: '♣',
  [CARD_TYPES.HEART]: '♥',
  [CARD_TYPES.SPADE]: '♠',
};

const NumberType = ({ number, type }) => (
  <Fragment>
    {number} <Type type={type}>{typeIcon[type]}</Type>
  </Fragment>
);

const Card = props => {
  return (
    <Wrapper>
      <LeftTop>
        <NumberType {...props} />
      </LeftTop>

      <RightBottom>
        <NumberType {...props} />
      </RightBottom>
    </Wrapper>
  );
};

export default Card;
