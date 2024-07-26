import React, { useState } from 'react';
import styled from 'styled-components';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import TitleTextContainer from '../container/TitleTextContainer';

const WrapIngredientPrice = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.7px solid #e3e3e3;
  padding: 0px 10px;
`;

const IngredientPriceText = styled.div`
  margin: 24px 12px 8px 12px;
  font-size: 16px;
  strong {
    margin-right: 12px;
  }
`;

const PriceFluctionRate = styled.span`
  font-weight: bold;
  color: ${({ $rate }) => (parseFloat($rate) > 0 ? 'red' : 'blue')};
`;

export default function IngredientInfo({ IngredientId }) {
  // 추후 데이터 형식 수정 될 가능성 있음
  const [ingredient, setIngredient] = useState({ name: '감자', priceFluctuationRate: '-1.1', priceToday: 1234 });

  return (
    <WhiteWrapContainer width='92.5%' height='383px'>
      <TitleTextContainer>{ingredient.name}</TitleTextContainer> {/* 추후 변수로 수정 예정 */}
      <WrapIngredientPrice>
        <IngredientPriceText>
          <strong>오늘 가격</strong>
          {ingredient.priceToday.toLocaleString()}원
        </IngredientPriceText>
        <IngredientPriceText>
          <strong>등락율</strong>
          <PriceFluctionRate $rate={ingredient.priceFluctuationRate}>
            {ingredient.priceFluctuationRate}%
          </PriceFluctionRate>
        </IngredientPriceText>
      </WrapIngredientPrice>
    </WhiteWrapContainer>
  );
}
