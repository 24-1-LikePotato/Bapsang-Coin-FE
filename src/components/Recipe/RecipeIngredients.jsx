import React, { useState } from 'react';
import styled from 'styled-components';
import '../fonts/OpenSans.css';
import RecipeWhiteContainer from "./RecipeWhiteContainer";

const IngredientsList = styled.div`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;
  color: #3D3D3D;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.expanded ? 'unset' : '2'};
  -webkit-box-orient: vertical;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpandButton = styled.button`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 0.75rem;
  color: #A3A3A3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ArrowIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.063rem;
  margin-left: 0.125rem;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`;

export default function RecipeIngredients() {
  const [expanded, setExpanded] = useState(false);
  // 식재료 데이터 받아오기
  const ingredients = [
    '취나물밥 밥 210g(1공기), 다진 쇠고기 20g(1⅓큰술), 취나물 20g(8줄기), 다진 양파 5g(1작은술), 다진마늘 5g(1작은술), 간장 약간, 매실즙 3g(2/3작은술), 참기름 2g(1/3작은술), 참깨 5g(1작은술), 소금 약간 청국장쌈장 청국장 20g(1⅓큰술), 된장 2g(1/3작은술), 콩가루 5g(1작은술), 멸치가루 2g(1/3작은술), 쌀뜨물 30g(2큰술), 다진 양파 7g(1/2큰술), 다진 호박 7g(1/2큰술), 다진 당근 7g(1/2큰술), 다진 표고버섯 7g(1/2큰술), 다진 호두 5g(1작은술), 참기름 2g(1/3작은술)'
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <RecipeWhiteContainer title={
        <TitleContainer>
          <div>
            식재료
          </div>
          <ExpandButton onClick={toggleExpand}>
            {expanded ? '접기' : '펼쳐보기'}
            <ArrowIcon 
              src="/assets/images/RecipeArrow.png" 
              alt="expand arrow" 
              expanded={expanded}
            />
          </ExpandButton>
        </TitleContainer>
      }>
      <IngredientsList expanded={expanded}>
        {ingredients}
      </IngredientsList>
    </RecipeWhiteContainer>
  );
}
