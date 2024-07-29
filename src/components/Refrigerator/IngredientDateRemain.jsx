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
      <WhiteWrapContainer width='74px' height='90px'>
        <IngredientDateRemainText>
          {ingredientName}
          <strong>{ingredientRemain}일 남음</strong>
          <DeleteButton $isSelected={isSelected} onClick={handleDeleteClick}>
            <RxCross2 />
          </DeleteButton>
        </IngredientDateRemainText>
      </WhiteWrapContainer>
      {isModalOpen && <RefrigeratorModalOverlay onDelete={onDelete} setModalOpen={setModalOpen} id={id} />}
    </WrapIngredientDateRemain>
  );
}

const WrapIngredientDateRemain = styled.div`
  margin-top: 4px;
`;

const IngredientDateRemainText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;

  strong {
    margin-top: 8px;
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: -28px;
  left: -12px;
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
