import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  width: ${({ width }) => width || '190px'};
  height: ${({ height }) => height || '40px'};
  background-color: ${({ 'data-accent': accent }) => (accent ? '#ffaa2f' : '#FFEFDC')};
  color: ${({ 'data-accent': accent }) => (accent ? '#ffffff' : '#3D3D3D')};
  margin-right: 5px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export default function StandardButton({ width, height, accent, children, ...rest }) {
  return (
    <StyleButton width={width} height={height} data-accent={accent} {...rest}>
      {children}
    </StyleButton>
  );
}
