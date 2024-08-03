import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import TitleTextContainer from '../container/TitleTextContainer';
import GraphContainer from '../container/GraphContainer';
import DataErrorMessageContainer from '../container/DataErrorMessageContainer';

export default function IngredientInfo({ IngredientId, dayPrice, graphData }) {
  const [priceChanges, setPriceChanges] = useState({
    id: '',
    color: 'hsl(116, 70%, 50%)',
    data: [],
  });
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (
      graphData &&
      graphData.ingredient &&
      graphData.forty !== undefined &&
      graphData.thirty !== undefined &&
      graphData.twenty !== undefined &&
      graphData.ten !== undefined &&
      graphData.today !== undefined
    ) {
      setPriceChanges({
        id: graphData.ingredient.name,
        color: 'hsl(116, 70%, 50%)',
        data: [
          { x: '40일전', y: graphData.forty },
          { x: '30일전', y: graphData.thirty },
          { x: '20일전', y: graphData.twenty },
          { x: '10일전', y: graphData.ten },
          { x: '현재', y: graphData.today },
        ],
      });
      setIsDataLoaded(true);
    } else {
      setIsDataLoaded(false);
    }
  }, [graphData]);

  useEffect(() => {
    if (dayPrice && dayPrice.ingredient && dayPrice.price !== undefined && dayPrice.updown_percent !== undefined) {
      setIsDataLoaded(true);
    } else {
      setIsDataLoaded(false);
    }
  }, [dayPrice]);

  const isGraphDataEmpty = priceChanges.data.every(
    (point) => point.y === null || point.y === undefined || point.y === ''
  );

  if (!isDataLoaded) {
    return (
      <WhiteWrapContainer width='92.5%' height='383px'>
        <DataErrorMessageContainer>로딩 중...</DataErrorMessageContainer>
      </WhiteWrapContainer>
    );
  }

  return (
    <WhiteWrapContainer width='92.5%' height='383px'>
      {dayPrice && dayPrice.ingredient && dayPrice.price !== undefined && dayPrice.updown_percent !== undefined ? (
        <>
          <TitleTextContainer perUnit='1kg'>{dayPrice.ingredient.name}</TitleTextContainer>
          <WrapIngredientPrice>
            <IngredientPriceText>
              <strong>오늘 가격</strong>
              {dayPrice.price.toLocaleString()}원
            </IngredientPriceText>
            <IngredientPriceText>
              <strong>등락율</strong>
              <PriceFluctionRate $rate={dayPrice.updown_percent}>{dayPrice.updown_percent}%</PriceFluctionRate>
            </IngredientPriceText>
          </WrapIngredientPrice>
        </>
      ) : (
        <DataErrorMessageContainer>데이터가 존재하지 않습니다</DataErrorMessageContainer>
      )}
      {isGraphDataEmpty ? (
        <DataErrorMessageContainer>데이터가 존재하지 않습니다</DataErrorMessageContainer>
      ) : (
        <GraphContainer data={[priceChanges]} />
      )}
    </WhiteWrapContainer>
  );
}

const WrapIngredientPrice = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.7px solid #e3e3e3;
  padding: 0px 10px;
`;

const IngredientPriceText = styled.div`
  margin: 8px 12px;
  font-size: min(4vw, 16px);
  strong {
    margin-right: 12px;
  }
`;

const PriceFluctionRate = styled.span`
  font-weight: bold;
  color: ${({ $rate }) => (parseFloat($rate) > 0 ? 'red' : 'blue')};
`;
