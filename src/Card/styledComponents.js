import styled, { css } from 'styled-components';

import { CARD_TYPES } from 'constants.js';

export const Type = styled.span`
  color: black;

  ${props =>
    [CARD_TYPES.HEART, CARD_TYPES.SPADE].includes(props.type) &&
    css`
      color: red;
    `};
`;
