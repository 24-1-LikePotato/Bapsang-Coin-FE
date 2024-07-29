import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IngredientDateRemain from './IngredientDateRemain';
import HorizontalScrollContainer from '../container/HorizontalScrollContainer';

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
    { id: '1', name: '양파', remainDate: '2' },
    { id: '2', name: '감자', remainDate: '3' },
    { id: '3', name: '고구마', remainDate: '4' },
    { id: '4', name: 'title4', remainDate: '5' },
    { id: '5', name: 'title5', remainDate: '6' },
    { id: '6', name: 'title6', remainDate: '7' },
    { id: '7', name: 'title7', remainDate: '8' },
    { id: '8', name: 'title8', remainDate: '9' },
    { id: '9', name: 'title9', remainDate: '10' },
    { id: '10', name: 'title10', remainDate: '11' },
    { id: '11', name: 'title11', remainDate: '12' },
    { id: '12', name: 'title12', remainDate: '13' },
    { id: '13', name: 'title13', remainDate: '14' },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  // 내 냉장고 데이터 9개로 쪼개기
  const chunkedIngredients = chunkArray(ingredients, 9);

  const handleDelete = (id) => {
    setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient.id !== id));
    setSelectedId(null);
  };

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.ingredient-item')) {
      setSelectedId(null);
    }
  };

  // 바깥 클릭시 selectedId 해제
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <WrapGridContainer>
      <HorizontalScrollContainer width='266px' height='380px'>
        <HorizontalWrapper>
          {chunkedIngredients.map((chunk, chunkIdx) => (
            <ContainerWrapper key={chunkIdx}>
              <WrapChunk>
                {chunk.map((ingredient, idx) => (
                  <IngredientDateRemain
                    className='ingredient-item'
                    ingredientName={ingredient.name}
                    ingredientRemain={ingredient.remainDate}
                    id={ingredient.id}
                    isSelected={selectedId === ingredient.id}
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
