import React from 'react';
import styled from 'styled-components';
import { FiHome } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { BsBasket } from 'react-icons/bs';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import StyledIcon from '../Button/StyledIcon';

const WrapNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: auto;
  max-width: 375px;
  height: 4.5rem;
  background-color: #ffffff;
  border-top: 1px solid #e3e3e3;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  width: 3rem;
  color: ${({ $isActive }) => ($isActive ? '#3D3D3D' : '#8c8c8c')};
  text-decoration: none;
`;

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  return (
    <WrapNavBar>
      <StyledLink to='/home' $isActive={currentPath === '/home'}>
        <StyledIcon as={FiHome} width='24px' height='23px' />홈
      </StyledLink>
      <StyledLink to='/home/Ingredients' $isActive={currentPath.startsWith('/home/ingredients')}>
        <StyledIcon as={BsBasket} width='24px' height='23px' />
        식재료
      </StyledLink>
      <StyledLink to='/home/refrigerator' $isActive={currentPath === '/home/refrigerator'}>
        <StyledIcon as={CgSmartHomeRefrigerator} width='24px' height='23px' />내 냉장고
      </StyledLink>
    </WrapNavBar>
  );
}
