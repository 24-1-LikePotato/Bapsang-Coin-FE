import React from 'react';
import styled from 'styled-components';
import StandardButton from '../Button/StandardButton';
import { useNavigate } from 'react-router-dom';
import RefrigeratorGrid from './RefrigeratorGrid';

export default function MyRefrigerator() {
  const navigate = useNavigate();
  return (
    <>
      <TextContainer>
        <StyledText>내 냉장고 현황</StyledText>
        <StandardButton
          accent='true'
          width='73px'
          height='30px'
          marginRight='40px'
          onClick={() => {
            navigate(`/home/AddIngredient/1`);
          }}
        >
          등록하기
        </StandardButton>
      </TextContainer>
      <RefrigeratorGrid />
    </>
  );
}

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 22px 0px;
`;
const StyledText = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 40px;
  display: flex;
  align-items: center;
`;
