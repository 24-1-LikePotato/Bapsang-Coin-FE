import React from 'react';
import styled from 'styled-components';

const StyledDetailButton = styled.button`
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || '40px'};
  border: none;
  border-top: 0.5px solid #e3e3e3;
  font-size: 16px;
  background-color: #ffffff;
  color: #a3a3a3;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export default function DetailButton({ children, ...rest }) {
  return <StyledDetailButton {...rest}>{children}</StyledDetailButton>;
}
