import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WhiteWrapContainer from "../container/WhiteWrapContainer";
import HorizontalScrollContainer from "../container/HorizontalScrollContainer";

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
  width: 75px;
  height: 85px;
  border-radius: 15px;
  background-color: #fff9f2;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  margin-left: 11px;
  margin-right: 11px;
`;

const Name = styled.p`
  font-size: 10px;
  margin-top: 13px;
  font-weight: 600;
  color: #3d3d3d;
`;

const Price = styled.p`
  font-size: 16px;
  margin-top: 4px;
  font-weight: 600;
  color: #3d3d3d;
`;

const Rate = styled.p`
  font-size: 12px;
  margin-top: 3px;
  color: #0066ff;
`;

export default function Recommend() {
  const navigate = useNavigate();

  //추천 식재료 임의 데이터 설정
  const [recommendItems, setRecommendItems] = useState([
    { id: "id1", name: "", price: "", rate: "" },
    { id: "id2", name: "", price: "", rate: "" },
    { id: "id3", name: "", price: "", rate: "" },
    { id: "id4", name: "", price: "", rate: "" },
    { id: "id5", name: "", price: "", rate: "" },
  ]);

  const handleBoxClick = (id) => {
    navigate(`/home/Ingredients/${id}`);
  };
  return (
    <Wrapper>
      <WhiteWrapContainer height="192px">
        <Title>추천 식재료</Title>
        <HorizontalScrollContainer height="120px">
          <ContentWrapper>
            {recommendItems.map((item) => (
              <ContentBox key={item.id} onClick={() => handleBoxClick(item.id)}>
                <TextWrapper>
                  <Name>감자{item.name}</Name>
                  <Price>1,234{item.price}원</Price>
                  <Rate>-1.1{item.rate}%</Rate>
                </TextWrapper>
              </ContentBox>
            ))}
          </ContentWrapper>
        </HorizontalScrollContainer>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
