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

const IncreaseWrapper = styled.div`  //최고 가격
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;
const IncreaseImg = styled.img`
  margin-top: 24px;
`;
const Increase_TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 23px;
  font-size: min(4vw, 16px); //기기 호환을 위한 폰트 단위 수정
`;

const Increase_Name = styled.p`
  font-weight: 500;
  color: #3d3d3d;
`;

const Increase_Price = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  margin-left: 19px;
`;

const Increase_Rate = styled.p`
  font-weight: 500;
  color: #ff0000;
  margin-left: 92px;
`;

const DecreaseWrapper = styled.div`  //최저 가격
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DecreaseImg = styled.img`
  margin-top: 23px;
`;

const Decrease_TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18px;
  margin-left: 23px;
  font-size: min(4vw, 16px);
`;

const Decrease_Name = styled.p`
  font-weight: 500;
  color: #3d3d3d;
`;

const Decrease_Price = styled.p`
  font-weight: 500;
  color: #3d3d3d;
  margin-left: 19px;
`;

const Decrease_Rate = styled.p`
  font-weight: 500;
  color: #0066ff;
  margin-left: 92px;
`;

const Bar = styled.div`
  width: 313px;
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
          <Increase_TextWrapper>
            <Increase_Name>{highestPriceItem.name}</Increase_Name>
            <Increase_Price>{highestPriceItem.price} 원</Increase_Price>
            <Increase_Rate>{highestPriceItem.rate}%</Increase_Rate>
          </Increase_TextWrapper>
        </IncreaseWrapper>

        <Bar></Bar>

        <DecreaseWrapper>
          <DecreaseImg src="/assets/icons/decrease.png"></DecreaseImg>
          <Decrease_TextWrapper>
            <Decrease_Name>{lowestPriceItem.name}</Decrease_Name>
            <Decrease_Price>{lowestPriceItem.price} 원</Decrease_Price>
            <Decrease_Rate>{lowestPriceItem.rate}%</Decrease_Rate>
          </Decrease_TextWrapper>
        </DecreaseWrapper>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
