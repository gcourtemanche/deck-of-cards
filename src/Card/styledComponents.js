import styled, { css } from 'styled-components';

import { CARD_TYPES } from 'constants.js';

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  height: 250px;
  margin: 10px auto;
  position:relative
  width: 200px;
`;

export const LeftTop = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const RightBottom = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const Type = styled.span`
  color: black;

  ${props =>
    [CARD_TYPES.HEART, CARD_TYPES.SPADE].includes(props.type) &&
    css`
      color: red;
    `};
`;
