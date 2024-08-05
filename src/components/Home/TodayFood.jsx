import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import ImageContainer from '../container/ImageContainer';
import HorizontalScrollContainer from '../container/HorizontalScrollContainer';
import '../fonts/OpenSans.css';
import apiClient from '../../apis/ApiClient';

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
  margin-top: 10px;
`;
const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  overflow-y: hidden; /* 세로 스크롤 방지 */
  overflow-x: auto;
  position: relative; /* 컨테이너 위치 고정 */
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentBox = styled.div`
  width: 240px;
  height: auto;
  border-radius: 35px;
  background-color: #fff;
  cursor: pointer;
  flex-shrink: 0; /* 요소가 줄어들지 않도록 설정 */
`;
const WrapImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px;
`;

const Text = styled.p`
  word-break: keep-all;
  margin-left: 23px;
  margin-right: 23px;
  text-align: center;
  justify-content: center;
  font-family: 'OpenSans';
  font-weight: 400;
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

  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const res = await apiClient.get('/main/today-recipe');
        setFoodItems(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFoodItems();
  }, []);

  const handleBoxClick = (name) => {
    navigate(`/home/recipe/${name}/${name}`);
  };
  return (
    <Wrapper>
      <WhiteWrapContainer height='auto'>
        <Title>오늘의 집밥</Title>
        <HorizontalScrollContainer height='auto'>
          <ContentWrapper>
            {foodItems.map((item) => (
              <ContentBox key={item.name} onClick={() => handleBoxClick(item.name)}>
                <WrapImageContainer>
                  <ImageContainer width='200px' height='200px' imgSrc={item.image}></ImageContainer>
                </WrapImageContainer>

                <Text>{item.name}</Text>
              </ContentBox>
            ))}
          </ContentWrapper>
        </HorizontalScrollContainer>
      </WhiteWrapContainer>
    </Wrapper>
  );
}
