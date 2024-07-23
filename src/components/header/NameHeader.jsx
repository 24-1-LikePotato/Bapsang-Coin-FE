import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiBowlRice } from 'react-icons/bi';
import styled from 'styled-components';
import StyledIcon from '../Button/StyledIcon';
import GongGothicFontStyle from '../fonts/GongGothicFontStyle';
import { SlArrowLeft } from 'react-icons/sl';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 32px;
  background-color: #fff7ec;
  color: #3d3d3d;
  position: relative;
`;

const IconWrapper = styled.div`
  margin-right: 2px;
`;

const Title = styled.h1`
  font-size: 19px;
  font-family: 'GongGothic', sans-serif;
`;

const LeftButton = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

export default function NameHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  let headerTitle;
  let headerIcon = null;

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
      break;
    default:
      headerTitle = '집밥코인';
  }

  return (
    <Header>
      <GongGothicFontStyle />
      {headerTitle === '집밥코인' ? null : (
        <LeftButton onClick={() => navigate(-1)}>
          <StyledIcon as={SlArrowLeft} width='21px' height='20px' />
          뒤로가기
        </LeftButton>
      )}
      {headerIcon && <IconWrapper>{headerIcon}</IconWrapper>}
      <Title>{headerTitle}</Title>
    </Header>
  );
}
