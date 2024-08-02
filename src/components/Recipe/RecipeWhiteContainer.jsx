import React from 'react';
import styled from 'styled-components';
import '../fonts/OpenSans.css';
import WhiteWrapContainer from "../container/WhiteWrapContainer";

const Title = styled.div`
  font-family: 'OpenSans';
  font-weight: 700;
  font-size: 1.25rem;
  color: #3D3D3D;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
const Bar = styled.div`
  width: 100%;
  height: 0.044rem;
  background-color: #e3e3e3;
  margin-top: 1rem;
`;

const ContentContainer = styled.div`
  margin-top: 1rem;
`;

export default function RecipeWhiteContainer({ title, children }) {
  return (
    <WhiteWrapContainer height='auto'>
      <Title>{title}</Title>
      <Bar/>
      <ContentContainer>{children}</ContentContainer>
    </WhiteWrapContainer>
  );
}
