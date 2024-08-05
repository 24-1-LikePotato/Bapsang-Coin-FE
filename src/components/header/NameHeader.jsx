import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiBowlRice } from 'react-icons/bi';
import styled from 'styled-components';
import StyledIcon from '../Button/StyledIcon';
import GongGothicFontStyle from '../fonts/GongGothicFontStyle';
import { SlArrowLeft } from 'react-icons/sl';

const HeaderWrapper = styled.div`
  position: ${props => props.$isRecipePage ? 'absolute' : 'relative'};
  width: 100%;
  max-width: 430px;
  top: 0;
`;

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.$isRecipePage ? 'rgba(255, 247, 236, 0.5)' : '#fff7ec'};
`;

const HeaderContent = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 32px;
`;

const IconWrapper = styled.div`
  margin-right: 2px;
`;

const Title = styled.h1`
  font-size: 19px;
  font-family: 'GongGothic', sans-serif;
  color: #3d3d3d;
`;

const LeftButton = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export default function NameHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  let headerTitle;
  let headerIcon = null;
  let isRecipePage = false;

  switch (true) {
    case /^\/home$/i.test(pathname):
      headerTitle = '집밥코인';
      headerIcon = <StyledIcon as={BiBowlRice} width='18px' height='25px' />;
      break;
    case /^\/home\/ingredients$/i.test(pathname):
      headerTitle = '식재료';
      break;
    case /^\/home\/ingredients\/.*$/i.test(pathname):
      headerTitle = '식재료';
      break;
    case /^\/home\/refrigerator$/i.test(pathname):
      headerTitle = '내 냉장고';
      break;
    case /^\/home\/addingredient\/.*$/i.test(pathname):
      headerTitle = '식재료 등록';
      break;
    case /^\/home\/recipe\/[^/]+\/[^/]+$/i.test(pathname):
      headerTitle = '레시피';
      isRecipePage = true;
      break;
    default:
      headerTitle = '집밥코인';
  }

  return (
    <HeaderWrapper $isRecipePage={isRecipePage}>
      <HeaderBackground $isRecipePage={isRecipePage} />
      <HeaderContent>
        <GongGothicFontStyle />
        {headerTitle === '집밥코인' ? null : (
          <LeftButton onClick={() => navigate(-1)}>
            <StyledIcon as={SlArrowLeft} width='21px' height='20px' />
          </LeftButton>
        )}
        {headerIcon && <IconWrapper>{headerIcon}</IconWrapper>}
        <Title>{headerTitle}</Title>
      </HeaderContent>
    </HeaderWrapper>
  );
}
