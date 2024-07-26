import React from 'react';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import TitleTextContainer from '../container/TitleTextContainer';

export default function IngredientInfo({ IngredientId }) {
  return (
    <WhiteWrapContainer width='92.5%' height='383px'>
      <TitleTextContainer>감자</TitleTextContainer> {/* 추후 변수로 수정 예정 */}
    </WhiteWrapContainer>
  );
}
