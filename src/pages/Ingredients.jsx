import React from 'react';
import styled from 'styled-components';
import WhiteWrapContainer from '../components/container/WhiteWrapContainer';

const WrapIngredients = styled.div`
  background-color: #fff7ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Ingredients() {
  return (
    <WrapIngredients>
      <div>Ingredients</div>
      <WhiteWrapContainer height='100px'></WhiteWrapContainer>
    </WrapIngredients>
  );
}
