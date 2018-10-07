import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { CARD_TYPES } from 'constants.js';
import { Wrapper, Type, LeftTop, RightBottom } from './styledComponents';

const typeEmoji = {
  [CARD_TYPES.DIAMOND]: '♦',
  [CARD_TYPES.CLUB]: '♣',
  [CARD_TYPES.HEART]: '♥',
  [CARD_TYPES.SPADE]: '♠',
};

const NumberType = ({ number, type }) => (
  <Fragment>
    {number} <Type type={type}>{typeEmoji[type]}</Type>
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

Card.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(CARD_TYPES)).isRequired,
};

export default Card;
