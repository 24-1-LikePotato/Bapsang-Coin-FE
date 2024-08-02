import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import WhiteWrapContainer from "../container/WhiteWrapContainer";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const IncreaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px; 
  width: 100%;
`;

const IncreaseImg = styled.img`
  margin-top: 0; 
`;

const IncreaseTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 23px;
  font-size: min(3.8vw, 16px);
`;

const IncreaseName = styled.p`
  font-weight: 500;
  color: #3d3d3d;
`;

const IncreasePrice = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  margin-left: 19px;
`;

const IncreaseRate = styled.p`
  font-weight: 500;
  color: #ff0000;
  margin-left: 90px;
`;

const DecreaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
  margin-right: 20px;
  width: 100%;
`;

const DecreaseImg = styled.img`
  margin-top: 0; 
`;

const DecreaseTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 25px; 
  font-size: min(3.8vw, 16px);
`;

const DecreaseName = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  //letter-spacing:10px;
`;

const DecreasePrice = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  margin-left: 19px;
`;

const DecreaseRate = styled.p`
  font-weight: 500;
  color: #0066ff;
  margin-left: 90px;
`;

const Bar = styled.div`
  width: 295px;
  height: 0.7px;
  background-color: #e3e3e3;
  margin-top: 13px;
`;

export default function TodayPrice() {
  const [highestPriceItem, setHighestPriceItem] = useState({});
  const [lowestPriceItem, setLowestPriceItem] = useState({});

  useEffect(() => {
    axios
      .get(`https://zipbab-coin.p-e.kr/price/today-price`)
      .then((res) => {
        console.log('API Response:', res.data);
        
        if (res.data.highest_price_item && res.data.lowest_price_item) {
          setHighestPriceItem(res.data.highest_price_item);
          setLowestPriceItem(res.data.lowest_price_item);
        } else {
          console.error('API response structure is not as expected');
        }
      })
      .catch((err) => {
        console.error('API Error:', err);
      });
  }, []);

  return (
    <Wrapper>
      <WhiteWrapContainer height="182px">
        <Title>오늘의 식재료 가격</Title>
        <IncreaseWrapper>
          <IncreaseImg src="/assets/icons/increase.png"></IncreaseImg>
          <IncreaseTextWrapper>
            <IncreaseName>{highestPriceItem.ingredient_name}</IncreaseName>
            <IncreasePrice>{parseInt(highestPriceItem.price).toLocaleString()}원</IncreasePrice>
            <IncreaseRate>{highestPriceItem.updown_percent}%</IncreaseRate>
          </IncreaseTextWrapper>
        </IncreaseWrapper>

        <Bar></Bar>

        <DecreaseWrapper>
          <DecreaseImg src="/assets/icons/decrease.png"></DecreaseImg>
          <DecreaseTextWrapper>
            <DecreaseName>{lowestPriceItem.ingredient_name}</DecreaseName>
            <DecreasePrice>{parseInt(lowestPriceItem.price).toLocaleString()}원</DecreasePrice>
            <DecreaseRate>{lowestPriceItem.updown_percent}%</DecreaseRate>
          </DecreaseTextWrapper>
        </DecreaseWrapper>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
