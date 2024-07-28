import React, { useEffect, useState } from 'react';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import styled from 'styled-components';
import HorizontalScrollContainer from '../container/HorizontalScrollContainer';
import StandardButton from '../Button/StandardButton';
import ImageContainer from '../container/ImageContainer';
import DetailButton from '../Button/DetailButton';
import StyledIcon from '../Button/StyledIcon';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import TitleTextContainer from '../container/TitleTextContainer';

// 추후 IngredientId 로 식재료에 있는 recipes 가져오기
export default function RelatedIngredients({ IngredientId }) {
  const navigate = useNavigate();
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
    <WhiteWrapContainer width='92.5%' height='445px'>
      <TitleTextContainer>관련 레시피</TitleTextContainer>
      <HorizontalScrollContainer height='26px'>
        {recipes.map((recipe) => (
          <StandardButton
            width='92px'
            height='24px'
            key={recipe.id}
            accent={selectedRecipeId === recipe.id}
            marginRight='5px'
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
  );
}

const WrapImageContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
`;
