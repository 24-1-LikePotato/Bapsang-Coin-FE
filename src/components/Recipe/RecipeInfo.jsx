import React from 'react';
import styled from 'styled-components';
import RecipeWhiteContainer from "./RecipeWhiteContainer";

const NutritionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const NutritionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const NutritionType = styled.div`
  width: 4rem;
  height: 1.375rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  color: #FFAA2F;
  background-color: #FFFFFF;
  border: 0.063rem solid #FFAA2F;
`;

const NutritionAmount = styled.div`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  color: #3D3D3D;
`

export default function RecipeInfo({ calorie, carb, protein, fat, natrium }) {
  const nutritionInfo = {
    calorie: calorie,
    carb: carb,
    protein: protein,
    fat: fat,
    natrium: natrium,
  };

  const nutritionItems = [
    { type: '열량', amount: `${nutritionInfo.calorie}kcal` },
    { type: '탄수화물', amount: `${nutritionInfo.carb}g` },
    { type: '단백질', amount: `${nutritionInfo.protein}g` },
    { type: '지방', amount: `${nutritionInfo.fat}g` },
    { type: '나트륨', amount: `${nutritionInfo.natrium}mg` },
  ];

  return (
    <RecipeWhiteContainer title='식품 정보'>
      <NutritionGrid>
        {nutritionItems.map((item, index) => (
          <NutritionItem key={index}>
            <NutritionType>{item.type}</NutritionType>
            <NutritionAmount>{item.amount}</NutritionAmount>
          </NutritionItem>
        ))}
      </NutritionGrid>
    </RecipeWhiteContainer>
  );
}