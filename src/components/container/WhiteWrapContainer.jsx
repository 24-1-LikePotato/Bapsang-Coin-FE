import React from 'react';
import styled from 'styled-components';

const WhiteContainer = styled.div`
  width: ${({ width }) => width || '92.5%'};
  height: ${({ height }) => height || '100vh'};
  margin-bottom: 16px;
  background-color: white;
  border-radius: 15px;
  padding-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 24px;
`;

export default function WhiteWrapContainer({ width, height, children }) {
  return (
    <WhiteContainer width={width} height={height}>
      {children}
    </WhiteContainer>
  );
}
