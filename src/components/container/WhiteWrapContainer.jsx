import React from 'react';
import styled from 'styled-components';

const WhiteContainer = styled.div`
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || '100vh'};
  background-color: white;
  border-radius: 15px;
  padding-bottom: 3px;
`;

export default function WhiteWrapContainer({ width, height }) {
  return <WhiteContainer width={width} height={height}></WhiteContainer>;
}
