import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  width: ${({ width }) => width || '7.5rem'};
  height: ${({ height }) => height || '2.5rem'};
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'OpenSans';
  font-weight: 700;
  color: ${({ color }) => color || '#F5F4F1'};
  background-color: ${({ buttoncolor }) => buttoncolor || '#FFAA2F'};
  border: 0.094rem solid ${({ color }) => color || '#F5F4F1'};
  cursor: pointer;
`;

export default function StyledButton({ width, height, text, color, buttoncolor, onClick }) {
  return (
    <ButtonStyle width={width} height={height} color={color} buttoncolor={buttoncolor} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}
