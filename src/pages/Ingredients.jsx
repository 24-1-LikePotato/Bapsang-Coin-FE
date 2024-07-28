import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RelatedIngredients from '../components/Ingredients/RelatedIngredients';
import IngredientInfo from '../components/Ingredients/IngredientInfo';
import Search from '../components/Input/Search';

// 추후 nav바에서 식재료 버튼 클릭시 IngredientId에 랜덤 추천 식재료 id로 이동하는 기능 만들기

export default function Ingredients() {
  const { IngredientId } = useParams();

  return (
    <WrapIngredients>
      <Search />
      <br />
      <IngredientInfo IngredientId={IngredientId} />
      <RelatedIngredients IngredientId={IngredientId} />
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
