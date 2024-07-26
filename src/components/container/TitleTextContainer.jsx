import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 8px 0px;
`;
const StyledText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export default function TitleTextContainer({ children }) {
  return (
    <TextContainer>
      <StyledText>{children}</StyledText>
    </TextContainer>
  );
}
