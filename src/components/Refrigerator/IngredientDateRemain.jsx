import React, { useState } from 'react';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';
import RefrigeratorModalOverlay from './RefrigeratorModalOverlay';

export default function IngredientDateRemain({ ingredientName, ingredientRemain, id, isSelected, onDelete, onSelect }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  return (
    <WrapIngredientDateRemain className='ingredient-item' onClick={() => onSelect(id)}>
      <StyledWhiteWrapContainer width='74px' height='90px'>
        <IngredientDateRemainText>
          <DeleteButton $isSelected={isSelected} onClick={handleDeleteClick}>
            <RxCross2 />
          </DeleteButton>
          {ingredientName}
          <strong>{ingredientRemain}일 남음</strong>
        </IngredientDateRemainText>
      </StyledWhiteWrapContainer>
      {isModalOpen && <RefrigeratorModalOverlay onDelete={onDelete} setModalOpen={setModalOpen} id={id} />}
    </WrapIngredientDateRemain>
  );
}

const WrapIngredientDateRemain = styled.div`
  margin-top: 4px;
`;

const StyledWhiteWrapContainer = styled(WhiteWrapContainer)`
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const IngredientDateRemainText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 100%;
  height: 100%;

  strong {
    margin-top: 8px;
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 32px;
  background-color: rgba(108, 108, 108, 0.2);
  color: white;
  border: none;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  opacity: ${(props) => (props.$isSelected ? 1 : 0)};
  visibility: ${(props) => (props.$isSelected ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
