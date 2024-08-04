import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
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

  .black-text {
    color: #000000;
  }
`

const WrapButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`

export default function AddIngredientTwo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ingredient_name, expiration_date, days_left } = location.state;
  const [typingComplete, setTypingComplete] = useState(false);

  const infoText = `입력하신 식재료<br/>
  '${ingredient_name}'의<br/>
  소비기한은 ${days_left}일 남았습니다.<br/>
  <br/>
  <br/>
  <br/>
  <span class="black-text">이대로 등록하시겠습니까?</span>`;

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://zipbab-coin.p-e.kr/main/fridge/4', {
        ingredient_name: ingredient_name,
        expiration_date: expiration_date
      });

      if (response.data.message === "정상적으로 식재료가 등록되었습니다.") {
        navigate('/home/refrigerator');
      } else {
        alert("식재료 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      alert("식재료 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <WrapAddIngredient>
      <InfoCheck>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(infoText)
              .callFunction(() => {
                setTypingComplete(true);
              })
              .start();
          }}
          options={{
            delay: 50,
          }}
        />
      </InfoCheck>
      {typingComplete && (
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
            onClick={handleRegister}
          />
        </WrapButton>
      )}
    </WrapAddIngredient>
  );
}