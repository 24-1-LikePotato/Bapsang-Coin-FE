import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WhiteWrapContainer from "../container/WhiteWrapContainer";
import ImageContainer from "../container/ImageContainer";
import HorizontalScrollContainer from "../container/HorizontalScrollContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
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
  overflow-y: hidden; /* 세로 스크롤 방지 */
  overflow-x: auto; /* 가로 스크롤 허용 */
  position: relative; /* 컨테이너 위치 고정 */
  width: 100%; /* 부모 컨테이너의 너비를 상속받음 */
`;

const ContentBox = styled.div`
  width: 240px;
  height: 338px;
  border-radius: 20px;
  background-color: #fff9f2;
  cursor: pointer;
  flex-shrink: 0; /* 요소가 줄어들지 않도록 설정 */
`;
const WrapImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  margin-left: 23px;
  margin-right: 23px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal; /* white-space 속성을 normal로 설정 */
  height: calc(1em * 3); /* 높이 설정 */
`;

export default function TodayFood() {
  const navigate = useNavigate();
  //오늘의 집밥 임의 데이터 설정
  const [foodItems, setFoodItems] = useState([
    { id: "id1", image: "", text: "" },
    { id: "id2", image: "", text: "" },
    { id: "id3", image: "", text: "" },
    { id: "id4", image: "", text: "" },
    { id: "id5", image: "", text: "" },
  ]);

  const handleBoxClick = (id) => {
    navigate(`/home/recipe/${id}/${id}`);
  };
  return (
    <Wrapper>
      <WhiteWrapContainer height="446px">
        <Title>오늘의 집밥</Title>
        <HorizontalScrollContainer height="357px">
          <ContentWrapper>
            {foodItems.map((item) => (
              <ContentBox key={item.id} onClick={() => handleBoxClick(item.id)}>
                <WrapImageContainer>
                  <ImageContainer width="200px" height="200px">
                    <Image src={item.image} alt={item.text} />
                  </ImageContainer>
                </WrapImageContainer>

                <Text>
                  유자꿀드레싱을 곁들인 곤드레 단호박 크로켓 샐러드 
                  {item.text}
                </Text>
              </ContentBox>
            ))}
          </ContentWrapper>
        </HorizontalScrollContainer>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
