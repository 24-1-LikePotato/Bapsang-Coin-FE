import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import WhiteWrapContainer from '../components/container/WhiteWrapContainer';
import HorizontalScrollContainer from '../components/container/HorizontalScrollContainer';
import StandardButton from '../components/Button/StandardButton';
import ImageContainer from '../components/container/ImageContainer';
import DetailButton from '../components/Button/DetailButton';
import StyledIcon from '../components/Button/StyledIcon';
import { MdKeyboardArrowRight } from 'react-icons/md';

// 추후 nav바에서 식재료 버튼 클릭시 IngredientId에 랜덤 추천 식재료 id로 이동하는 기능 만들기

export default function Ingredients() {
  const navigate = useNavigate();
  const { IngredientId } = useParams();
  const [recipes, setRecipes] = useState([
    // 임시 데이터
    { id: '1', title: 'title1', img: 'image1' },
    { id: '2', title: 'title2', img: 'image2' },
    { id: '3', title: 'title3', img: 'image3' },
    { id: '4', title: 'title4', img: 'image4' },
    { id: '5', title: 'title5', img: 'image5' },
  ]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    if (recipes.length > 0) {
      setSelectedRecipeId(recipes[0].id);
    }
  }, [recipes]);

  const handleButtonClick = (id) => {
    setSelectedRecipeId(id);
  };

  // 선택된 레시피의 img 값을 가져오는 함수
  const getSelectedRecipeImage = () => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId);
    return selectedRecipe ? selectedRecipe.img : null;
  };

  // DetailButton 클릭 시 네비게이트하는 함수
  const handleDetailButtonClick = () => {
    if (selectedRecipeId) {
      navigate(`/home/recipe/${IngredientId}/${selectedRecipeId}`);
    }
  };

  return (
    <WrapIngredients>
      <WhiteWrapContainer width='92.5%' height='383px'>
        <IngredientsTextContainer>
          <IngredientText>감자</IngredientText> {/* 추후 변수로 수정 예정 */}
        </IngredientsTextContainer>
      </WhiteWrapContainer>
      <WhiteWrapContainer width='92.5%' height='445px'>
        <IngredientsTextContainer>
          <IngredientText>관련 레시피</IngredientText>
        </IngredientsTextContainer>
        <HorizontalScrollContainer height='26px'>
          {recipes.map((recipe) => (
            <StandardButton
              width='92px'
              height='24px'
              key={recipe.id}
              accent={selectedRecipeId === recipe.id}
              onClick={() => handleButtonClick(recipe.id)}
            >
              {recipe.title}
            </StandardButton>
          ))}
        </HorizontalScrollContainer>
        <WrapImageContainer>
          <ImageContainer width='242px' height='242px' onClick={handleDetailButtonClick}>
            {selectedRecipeId && getSelectedRecipeImage()} {/* 추후 ImageContainer의 src로 들어갈 예정 */}
          </ImageContainer>
        </WrapImageContainer>
        <DetailButton onClick={handleDetailButtonClick}>
          이 레시피 자세히 보기
          <StyledIcon as={MdKeyboardArrowRight} width='16px' height='16px' />
        </DetailButton>
      </WhiteWrapContainer>
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

const IngredientsTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 8px 0px;
`;

const IngredientText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const WrapImageContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
`;
