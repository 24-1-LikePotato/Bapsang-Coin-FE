import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IngredientDateRemain from './IngredientDateRemain';
import HorizontalScrollContainer from '../container/HorizontalScrollContainer';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import DataErrorMessageContainer from '../container/DataErrorMessageContainer';
import axios from 'axios';

// 배열을 쪼개는 함수
const chunkArray = (array, size) => {
  if (!array) return [];
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

export default function RefrigeratorGrid() {
  const [ingredients, setIngredients] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteConfirmed, setDeleteConfirmed] = useState(false);
  const [isLoading, setLoading] = useState(true);

  //냉장고 재료 불러오기
  useEffect(() => {
    axios
      .get(`https://zipbab-coin.p-e.kr/main/fridge/4`)
      .then((res) => {
        setIngredients(res.data.ingredients);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // 바깥 클릭시 selectedId 해제
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // 내 냉장고 데이터 9개로 쪼개기
  const chunkedIngredients = chunkArray(ingredients, 9);

  //삭제 함수
  const handleDelete = async (id) => {
    try {
      await axios.request({
        method: 'delete',
        url: `https://zipbab-coin.p-e.kr/main/fridge/4`,
        data: {
          fridge_ingredient_id: id,
        },
      });
      setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient.id !== id));
      setSelectedId(null);
      setDeleteConfirmed(true);
    } catch (err) {
      console.error('삭제 실패:', err);
    }
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

  return (
    <>
      <WrapGridContainer>
        <HorizontalScrollContainer width='266px' height='380px'>
          {isLoading ? (
            <WrapDataErrorMessage>
              <DataErrorMessageContainer margin='150px auto'>로딩중 ...</DataErrorMessageContainer>
            </WrapDataErrorMessage>
          ) : ingredients && ingredients.length !== 0 ? (
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
                        key={idx}
                      />
                    ))}
                  </WrapChunk>
                </ContainerWrapper>
              ))}
            </HorizontalWrapper>
          ) : (
            <WrapDataErrorMessage>
              <DataErrorMessageContainer margin='150px auto'>등록해둔 식재료가 없습니다</DataErrorMessageContainer>
            </WrapDataErrorMessage>
          )}
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

const WrapDataErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
