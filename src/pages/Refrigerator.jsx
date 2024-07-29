import React from 'react';
import styled from 'styled-components';
import MyRefrigerator from '../components/Refrigerator/MyRefrigerator';
import SubscribeIngredients from '../components/Refrigerator/SubscribeIngredients';

export default function Refrigerator() {
  return (
    <WrapRefrigerator>
      <MyRefrigerator />
      <SubscribeIngredients />
    </WrapRefrigerator>
  );
}

const WrapRefrigerator = styled.div`
  background-color: rgb(255, 247, 236);
  min-height: 80vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
