import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import WhiteWrapContainer from "../container/WhiteWrapContainer";
import HorizontalScrollContainer from "../container/HorizontalScrollContainer";
import axios from "axios";
import "../fonts/OpenSans.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const ContentBox = styled.div`
  width: 100px;
  height: 95px;
  border-radius: 15px;
  background-color: #fff9f2;
  cursor: pointer;
  flex-shrink: 0; /* 요소가 줄어들지 않도록 설정 */
`;

const TextWrapper = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
  font-family: "OpenSans";
  font-weight: 400;
`;

const Name = styled.span`
  font-size: 0.8rem;
  //margin-top: 13px;
  font-weight: 500;
  color: #3d3d3d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  font-size: 1rem;
  margin-top: 4px;
  font-weight: 600;
  color: #3d3d3d;
`;

const Rate = styled.p`
  font-size: 0.8rem;
  margin-top: 3px;
  color: #0066ff;
`;

const Unit = styled.span`
  font-size: 0.6rem;
  margin-left: 4px;
`;

export default function Recommend() {
  const navigate = useNavigate();

  const [recommendItems, setRecommendItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://zipbab-coin.p-e.kr/price/recommend-price")
      .then((res) => {
        setRecommendItems(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBoxClick = (ingredient_name) => {
    navigate(`/home/Ingredients/${ingredient_name}`);
  };
  return (
    <Wrapper>
      <WhiteWrapContainer height="192px">
        <Title>추천 식재료</Title>
        <HorizontalScrollContainer height="120px">
          <ContentWrapper>
            {recommendItems.map((item) => (
              <ContentBox
                key={item.ingredient_name}
                onClick={() => handleBoxClick(item.ingredient_name)}
              >
                <TextWrapper>
                  <Name>
                    {item.ingredient_name}
                    <Unit>{item.unit}</Unit>
                  </Name>
                  <Price>{parseInt(item.price).toLocaleString()}원</Price>
                  <Rate>{item.updown_percent}%</Rate>
                </TextWrapper>
              </ContentBox>
            ))}
          </ContentWrapper>
        </HorizontalScrollContainer>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
