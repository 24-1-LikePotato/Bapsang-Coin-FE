import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import axios from 'axios';
import '../fonts/OpenSans.css';
import apiClient from '../../apis/ApiClient';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
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
  align-items: center;
  margin-top: 24px;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
`;

const IncreaseImg = styled.img`
  margin-top: 0;
`;

const IncreaseTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  font-size: min(3.8vw, 16px);
  width: 100%;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const IncreaseName = styled.div`
  font-weight: 500;
  color: #3d3d3d;
  text-align: left;
  flex: 1;
`;

const IncreasePrice = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  text-align: right;
  flex: 1;
`;

const IncreaseRate = styled.p`
  font-weight: 500;
  color: #ff0000;
  margin-left: 13px;
`;

const DecreaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
`;

const DecreaseImg = styled.img`
  margin-top: 0;
`;

const DecreaseTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  font-size: min(3.8vw, 16px);
  width: 100%;
  font-family: 'OpenSans';
  font-weight: 400;
`;

const DecreaseName = styled.div`
  font-weight: 500;
  color: #3d3d3d;
  text-align: left;
  flex: 1;
`;

const DecreasePrice = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  text-align: right;
  flex: 1;
`;

const DecreaseRate = styled.p`
  font-weight: 500;
  color: #0066ff;
  margin-left: 13px;
`;

const Bar = styled.div`
  width: 295px;
  height: 0.7px;
  background-color: #e3e3e3;
  margin-top: 13px;
`;

const Unit = styled.span`
  font-size: 0.6rem;
  margin-left: 4px;
`;

export default function TodayPrice() {
  const [highestPriceItem, setHighestPriceItem] = useState({});
  const [lowestPriceItem, setLowestPriceItem] = useState({});

  useEffect(() => {
    const fetchTodayPrice = async () => {
      try {
        const res = await apiClient.get('/price/today-price');
        // console.log("API Response:", res.data);

        if (res.data.highest_price_item && res.data.lowest_price_item) {
          setHighestPriceItem(res.data.highest_price_item);
          setLowestPriceItem(res.data.lowest_price_item);
        } else {
          console.error('API response structure is not as expected');
        }
      } catch (err) {
        console.error('API Error:', err);
      }
    };

    fetchTodayPrice();
  }, []);

  return (
    <Wrapper>
      <WhiteWrapContainer height='182px'>
        <Title>오늘의 식재료 가격</Title>
        <IncreaseWrapper>
          <IncreaseImg src='/assets/icons/increase.png'></IncreaseImg>
          <IncreaseTextWrapper>
            <IncreaseName>
              {highestPriceItem.ingredient_name}
              <Unit>{highestPriceItem.unit}</Unit>
            </IncreaseName>
            <span>
              <IncreasePrice>{parseInt(highestPriceItem.price).toLocaleString()}원</IncreasePrice>
            </span>
            <IncreaseRate>+{highestPriceItem.updown_percent}%</IncreaseRate>
          </IncreaseTextWrapper>
        </IncreaseWrapper>

        <Bar></Bar>

        <DecreaseWrapper>
          <DecreaseImg src='/assets/icons/decrease.png'></DecreaseImg>
          <DecreaseTextWrapper>
            <DecreaseName>
              {lowestPriceItem.ingredient_name}
              <Unit>{lowestPriceItem.unit}</Unit>
            </DecreaseName>
            <span>
              <DecreasePrice>{parseInt(lowestPriceItem.price).toLocaleString()}원</DecreasePrice>
            </span>
            <DecreaseRate>- {lowestPriceItem.updown_percent}%</DecreaseRate>
          </DecreaseTextWrapper>
        </DecreaseWrapper>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
