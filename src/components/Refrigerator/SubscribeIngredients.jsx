import React from 'react';
import WhiteWrapContainer from '../container/WhiteWrapContainer';
import styled from 'styled-components';
import StandardButton from '../Button/StandardButton';

export default function SubscribeIngredients() {
  return (
    <WhiteWrapContainer height='180px'>
      <WrapSubscribeIngredients>
        <WrapSubscribeText>
          <SubscribeIngredientsText>
            <strong>월간 식재료</strong>를 구독하면,
          </SubscribeIngredientsText>
          <SubscribeIngredientsText>
            매달 <strong>제철 재료를 배송</strong>받을 수 있어요!
          </SubscribeIngredientsText>
        </WrapSubscribeText>
        <StandardButton
          accent={true}
          width='190px'
          height='40px'
          onClick={() => {
            alert('구독 서비스');
          }}
        >
          <strong>구독하기</strong>
        </StandardButton>
      </WrapSubscribeIngredients>
    </WhiteWrapContainer>
  );
}

const WrapSubscribeIngredients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
`;

const WrapSubscribeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const SubscribeIngredientsText = styled.div`
  font-size: 4vw;
`;
