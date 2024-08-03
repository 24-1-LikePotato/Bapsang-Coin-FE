import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import '../fonts/OpenSans.css';
import RecipeWhiteContainer from "./RecipeWhiteContainer";

const IngredientsList = styled.div`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;
  color: #3D3D3D;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  max-height: ${props => props.$expanded ? props.$maxHeight : '3rem'};
`;

const IngredientText = styled.div`
  margin: 0.1rem 0;
`

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
  height: 0.6rem;
  border-radius: 0.063rem;
  margin-left: 0.125rem;
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`;

export default function RecipeIngredients({ ingredient_list }) {
  const ingredient = ingredient_list
  ? ingredient_list.split('●')
  : [];
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState('3rem');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setMaxHeight(`${listRef.current.scrollHeight}px`);
    }
  }, [ingredient_list]);

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
            $expanded={expanded}
          />
        </ExpandButton>
      </TitleContainer>
      }>
      <IngredientsList ref={listRef} $expanded={expanded} $maxHeight={maxHeight}>
        {ingredient.map((step, index) => (
            <IngredientText key={index}>{step}</IngredientText>
          ))}
      </IngredientsList>
    </RecipeWhiteContainer>
  );
}
