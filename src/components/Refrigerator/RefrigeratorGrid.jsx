import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IngredientDateRemain from './IngredientDateRemain';
import HorizontalScrollContainer from '../container/HorizontalScrollContainer';
import DeleteConfirmationModal from './DeleteConfirmationModal';

// 배열을 쪼개는 함수
const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

export default function RefrigeratorGrid() {
  const [ingredients, setIngredients] = useState([
    // 임시 데이터
    { id: '1', ingredient_name: '양파', days_until_expiration: '2', is_expiring_soon: false },
    { id: '2', ingredient_name: '감자', days_until_expiration: '3', is_expiring_soon: false },
    { id: '3', ingredient_name: '고구마', days_until_expiration: '4', is_expiring_soon: false },
    { id: '4', ingredient_name: 'title4', days_until_expiration: '5', is_expiring_soon: false },
    { id: '5', ingredient_name: 'title5', days_until_expiration: '6', is_expiring_soon: false },
    { id: '6', ingredient_name: 'title6', days_until_expiration: '1', is_expiring_soon: true },
    { id: '7', ingredient_name: 'title7', days_until_expiration: '8', is_expiring_soon: false },
    { id: '8', ingredient_name: 'title8', days_until_expiration: '9', is_expiring_soon: false },
    { id: '9', ingredient_name: 'title9', days_until_expiration: '10', is_expiring_soon: false },
    { id: '10', ingredient_name: 'title10', days_until_expiration: '1', is_expiring_soon: true },
    { id: '11', ingredient_name: 'title11', days_until_expiration: '12', is_expiring_soon: false },
    { id: '12', ingredient_name: 'title12', days_until_expiration: '13', is_expiring_soon: false },
    { id: '13', ingredient_name: 'title13', days_until_expiration: '14', is_expiring_soon: false },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteConfirmed, setDeleteConfirmed] = useState(false);

  // 내 냉장고 데이터 9개로 쪼개기
  const chunkedIngredients = chunkArray(ingredients, 9);

  const handleDelete = (id) => {
    setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient.id !== id));
    setSelectedId(null);
    setDeleteConfirmed(true);
  };

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.ingredient-item')) {
      setSelectedId(null);
    }
  };

  const handleCloseModal = () => {
    setDeleteConfirmed(false);
  };

  // 바깥 클릭시 selectedId 해제
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <WrapGridContainer>
        <HorizontalScrollContainer width='266px' height='380px'>
          <HorizontalWrapper>
            {chunkedIngredients.map((chunk, chunkIdx) => (
              <ContainerWrapper key={chunkIdx}>
                <WrapChunk>
                  {chunk.map((ingredient, idx) => (
                    <IngredientDateRemain
                      className='ingredient-item'
                      ingredientName={ingredient.ingredient_name}
                      ingredientRemain={ingredient.days_until_expiration}
                      id={ingredient.id}
                      isSelected={selectedId === ingredient.id}
                      expiringSoon={ingredient.is_expiring_soon}
                      onDelete={handleDelete}
                      onSelect={handleSelect}
                      key={ingredient.id}
                    />
                  ))}
                </WrapChunk>
              </ContainerWrapper>
            ))}
          </HorizontalWrapper>
        </HorizontalScrollContainer>
      </WrapGridContainer>
      <DeleteConfirmationModal isVisible={isDeleteConfirmed} onClose={handleCloseModal} />
    </>
  );
}

const WrapGridContainer = styled.div``;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 266px;
`;

const WrapChunk = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 74px);
  grid-template-rows: repeat(3, 90px);
  gap: 22px;
`;

const ContainerWrapper = styled.div`
  margin-right: 22px;
`;
