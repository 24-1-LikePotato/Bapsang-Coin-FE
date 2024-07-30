import React from "react";
import styled from "styled-components";
import { useState } from "react";
import WhiteWrapContainer from "../container/WhiteWrapContainer";

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
  //최고 가격
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const IncreaseImg = styled.img`
  margin-top: 24px;
`;
const IncreaseTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 23px;
  font-size: min(3.9vw, 16px); //폰트 단위 수정
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
  //최저 가격
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DecreaseImg = styled.img`
  margin-top: 23px;
`;

const DecreaseTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  margin-left: 23px;
  font-size: min(3.9vw, 16px);
`;

const DecreaseName = styled.p`
  font-weight: 500;
  color: #3d3d3d;
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
  //최고,최저 각각 임의 데이터 설정
  const [highestPriceItem, setHighestPriceItem] = useState({
    name: "감자",
    price: "1,234",
    rate: "+0.3",
  });
  const [lowestPriceItem, setLowestPriceItem] = useState({
    name: "오이",
    price: "2,334",
    rate: "-1.1",
  });

  return (
    <Wrapper>
      <WhiteWrapContainer height="182px">
        <Title>오늘의 식재료 가격</Title>
        <IncreaseWrapper>
          <IncreaseImg src="/assets/icons/increase.png"></IncreaseImg>
          <IncreaseTextWrapper>
            <IncreaseName>{highestPriceItem.name}</IncreaseName>
            <IncreasePrice>{highestPriceItem.price} 원</IncreasePrice>
            <IncreaseRate>{highestPriceItem.rate}%</IncreaseRate>
          </IncreaseTextWrapper>
        </IncreaseWrapper>

        <Bar></Bar>

        <DecreaseWrapper>
          <DecreaseImg src="/assets/icons/decrease.png"></DecreaseImg>
          <DecreaseTextWrapper>
            <DecreaseName>{lowestPriceItem.name}</DecreaseName>
            <DecreasePrice>{lowestPriceItem.price} 원</DecreasePrice>
            <DecreaseRate>{lowestPriceItem.rate}%</DecreaseRate>
          </DecreaseTextWrapper>
        </DecreaseWrapper>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
