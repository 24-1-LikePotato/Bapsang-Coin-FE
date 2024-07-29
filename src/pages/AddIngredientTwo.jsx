import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import '../components/fonts/OpenSans.css';
import StyledButton from '../components/Button/StyledButton'

const WrapAddIngredient = styled.div`
  background-color: #fff7ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const InfoCheck = styled.div`
  font-family: 'OpenSans';
  font-weight: 600;
  font-size: 1.5rem;
  color: #3D3D3D;
  margin: 5.563rem 0 4.75rem 2.5rem;
`

const RequestCheck = styled.div`
  font-family: 'OpenSans';
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 0 13.938rem 2.5rem;
`

const WrapButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto auto auto;
`

export default function AddIngredientTwo() {
  const navigate = useNavigate();
  const location = useLocation();
  const infoText = `입력하신 식재료<br/>
  '${location.state.ingredient_name}'의<br/>
  소비기한은 ${location.state.expiration_date}일입니다.`;

  return (
    <WrapAddIngredient>
      <InfoCheck>
        <Typewriter
          options={{
            strings: [infoText],
            autoStart: true,
            deleteSpeed: 99999999,
          }}
        />
      </InfoCheck>
      <RequestCheck>
        이대로 등록하시겠습니까?
      </RequestCheck>
      <WrapButton>
        <StyledButton
          width='7.5rem'
          text='아니오'
          color='#A3A3A3'
          buttoncolor='#FFF7EC'
          onClick={() => navigate(-1)}
        />
        <StyledButton
          width='7.5rem'
          text='예'
          color='#FFAA2F'
          buttoncolor='#FFF7EC'
          onClick={() => navigate('/home/refrigerator')}
        />
      </WrapButton>
    </WrapAddIngredient>
  );
}