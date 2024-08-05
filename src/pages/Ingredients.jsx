import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RelatedIngredients from '../components/Ingredients/RelatedIngredients';
import IngredientInfo from '../components/Ingredients/IngredientInfo';
import Search from '../components/Input/Search';
import DataErrorMessageContainer from '../components/container/DataErrorMessageContainer';
import apiClient from '../apis/ApiClient';

export default function Ingredients() {
  const { IngredientId } = useParams();
  const [dayPrice, setDayPrice] = useState({});
  const [graphData, setGraphData] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (IngredientId) {
          // 검색어를 입력했을 시
          res = await apiClient.get(`/main/search?ingredient=${IngredientId}`);
        } else {
          // 검색어를 입력하지 않고 nav바 클릭으로 넘어왔을 시
          res = await apiClient.get(`/main/ingredient`);
        }
        setIsError(false);
        setDayPrice(res.data.dayprice);
        setGraphData(res.data.monthprice);
      } catch (err) {
        setIsError(true);
      }
    };

    fetchData();
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
          <RelatedIngredients IngredientId={IngredientId} dayPrice={dayPrice} />
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
