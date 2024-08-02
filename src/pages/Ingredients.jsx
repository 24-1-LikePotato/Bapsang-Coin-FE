import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RelatedIngredients from '../components/Ingredients/RelatedIngredients';
import IngredientInfo from '../components/Ingredients/IngredientInfo';
import Search from '../components/Input/Search';
import axios from 'axios';
import DataErrorMessageContainer from '../components/container/DataErrorMessageContainer';

// 추후 nav바에서 식재료 버튼 클릭시 IngredientId에 랜덤 추천 식재료 id로 이동하는 기능 만들기

export default function Ingredients() {
  const { IngredientId } = useParams();
  // 식재료 정보로 넘어가는 데이터
  const [dayPrice, setDayPrice] = useState({});
  const [graphData, setGraphData] = useState({});
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (IngredientId) {
      console.log('search');
      //검색어를 입력했을 시
      axios
        .get(`https://zipbab-coin.p-e.kr/main/search/?ingredient=${IngredientId}`)
        .then((res) => {
          setIsError(false);
          setDayPrice(res.data.dayprice);
          setGraphData(res.data.monthprice);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        }); //검색어가 존재하지 않을 때
      //검색어가 존재할 때
    } else {
      console.log('Default');
      //검색어를 입력하지 않고 nav바 클릭으로 넘어왔을 시 (추후 변경 예정)
      axios
        .get(`https://zipbab-coin.p-e.kr/main/search/?ingredient=감자`)
        .then((res) => {
          setIsError(false);
          setDayPrice(res.data.dayprice);
          setGraphData(res.data.monthprice);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        }); //검색어가 존재하지 않을 때
    }
  }, [IngredientId]);

  return (
    <WrapIngredients>
      <Search />
      <br />
      {isError ? (
        <DataErrorMessageContainer margin='32vh 0'>존재하지 않는 식재료입니다</DataErrorMessageContainer>
      ) : (
        <>
          <IngredientInfo IngredientId={IngredientId} dayPrice={dayPrice} graphData={graphData} />
          <RelatedIngredients IngredientId={IngredientId} />
        </>
      )}
    </WrapIngredients>
  );
}

const WrapIngredients = styled.div`
  background-color: rgb(255, 247, 236);
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
