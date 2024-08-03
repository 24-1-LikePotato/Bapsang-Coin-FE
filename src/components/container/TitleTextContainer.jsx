import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: #3d3d3d;
  margin: 8px 0px;
`;
const StyledText = styled.div`
  color: #000000;
  font-weight: bold;
  margin-right: 8px;
  font-size: 20px;
`;

export default function TitleTextContainer({ children, perUnit }) {
  return (
    <TextContainer>
      <StyledText>{children}</StyledText> {perUnit}
    </TextContainer>
  );
}
