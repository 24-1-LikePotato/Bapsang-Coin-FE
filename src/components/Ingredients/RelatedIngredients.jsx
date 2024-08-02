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
import axios from 'axios';

export default function RelatedIngredients({ IngredientId, dayPrice }) {
  const navigate = useNavigate();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    if (IngredientId) {
      axios
        .get(`https://zipbab-coin.p-e.kr/main/recipe/search?ingredient=${IngredientId}`)
        .then((res) => {
          setRecipes(res.data);
          if (res.data.length > 0) {
            setSelectedRecipeId(res.data[0].name);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://zipbab-coin.p-e.kr/main/related-recipe`)
        .then((res) => {
          setRecipes(res.data);
          if (res.data.length > 0) {
            setSelectedRecipeId(res.data[0].name);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [IngredientId]);

  const handleButtonClick = (name) => {
    setSelectedRecipeId(name);
  };

  const getSelectedRecipeImage = () => {
    if (!recipes) return null;
    const selectedRecipe = recipes.find((recipe) => recipe.name === selectedRecipeId);
    return selectedRecipe ? selectedRecipe.image : null;
  };

  const handleDetailButtonClick = () => {
    if (selectedRecipeId) {
      navigate(`/home/recipe/${dayPrice.ingredient.name}/${selectedRecipeId}`);
    }
  };

  const truncateName = (name) => {
    if (name.length > 6) {
      return name.slice(0, 6) + '...';
    }
    return name;
  };

  return (
    <WhiteWrapContainer width='92.5%' height='445px'>
      <TitleTextContainer>관련 레시피</TitleTextContainer>
      <HorizontalScrollContainer height='26px'>
        {recipes &&
          recipes.map((recipe, idx) => (
            <StandardButton
              width='100px'
              height='24px'
              key={idx}
              accent={selectedRecipeId === recipe.name}
              marginRight='5px'
              onClick={() => handleButtonClick(recipe.name)}
            >
              {truncateName(recipe.name)}
            </StandardButton>
          ))}
      </HorizontalScrollContainer>
      <WrapImageContainer>
        <ImageContainer
          width='242px'
          height='242px'
          onClick={handleDetailButtonClick}
          imgSrc={getSelectedRecipeImage() || ''}
        ></ImageContainer>
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
