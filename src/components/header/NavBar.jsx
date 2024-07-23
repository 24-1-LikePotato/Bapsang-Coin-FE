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
  left: 0;
  width: 100%;
  height: 4rem;
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

  return (
    <WrapNavBar>
      <StyledLink to='/home' $isActive={location.pathname === '/home'}>
        <StyledIcon as={FiHome} width='22px' height='21px' />홈
      </StyledLink>
      <StyledLink to='/home/Ingredients' $isActive={location.pathname === '/home/Ingredients'}>
        <StyledIcon as={BsBasket} width='22px' height='21px' />
        식재료
      </StyledLink>
      <StyledLink to='/home/Refrigerator' $isActive={location.pathname === '/home/Refrigerator'}>
        <StyledIcon as={CgSmartHomeRefrigerator} width='22px' height='21px' />내 냉장고
      </StyledLink>
    </WrapNavBar>
  );
}
