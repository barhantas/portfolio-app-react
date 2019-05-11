import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';

export default function NavigatorButton({
  history,
  value = '/',
  text = 'NavigatorButton',
}) {
  const navigator = ({ target: { value } }) => {
    history.push(value);
  };
  return (
    <StyledButton component={Button} value={value} onClick={navigator}>
      {text}
    </StyledButton>
  );
}

export const StyledButton = styled(Button)`
  margin: 10px;
  width: 200px;
  align-self: center;
  font-family: monospace;
`;
