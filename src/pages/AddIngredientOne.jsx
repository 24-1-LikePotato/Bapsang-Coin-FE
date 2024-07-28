import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../components/fonts/OpenSans.css';
import StyledButton from '../components/Button/StyledButton'

const WrapAddIngredient = styled.div`
  background-color: #fff7ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const InputRequest = styled.div`
  font-family: 'OpenSans';
  font-weight: 600;
  font-size: 1.5rem;
  margin: 3rem 0 3.75rem 2.5rem;
`

const InputType = styled.div`
  font-family: 'OpenSans';
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0 0 1.5rem 2.5rem;
`

const InputText = styled.input`
  width: 16.875rem;
  height: 1.75rem;
  margin: 0 auto 3rem auto;
  outline: none;
  border: none;
  border-bottom: 1px solid #A3A3A3;
  background-color: #fff7ec;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;

  &::placeholder{
		color: #A3A3A3;
	}

  &::-webkit-outer-spin-button, // number type일 때 화살표 버튼 제거
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`

const WrapButton = styled.div`
  margin: 6.063rem auto auto auto;
`

export default function AddIngredientOne() {
  const [Ingredient, setIngredient] = useState("");
  const [Date, setDate] = useState(0);
  const navigate = useNavigate();

  const changeIngredient = (e) => {
    setIngredient(e.target.value);
  }

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  const handleIngredientInfo = ({ Ingredient, Date }) => {
    navigate("/home/addIngredient/2", {
      state: {
        ingredient_name: `${ Ingredient }`,
        expiration_date: `${ Date }`,
      },
    });
  };

  return (
    <WrapAddIngredient>
      <InputRequest>
        식재료와 소비기한을<br/>입력해주세요.
      </InputRequest>
      <InputType>
        식재료
      </InputType>
      <InputText
        type="text"
        placeholder="식재료를 입력해주세요."
        onChange={ changeIngredient }
      />
      <InputType>
        소비기한
      </InputType>
      <InputText
        type="number"
        placeholder="소비기한을 입력해주세요."
        onChange={ changeDate }
      />
      <WrapButton>
        <StyledButton
          width='11.875rem'
          text='등록하기'
          color='#F5F4F1'
          buttoncolor='#FFAA2F'
          onClick={() => handleIngredientInfo({ Ingredient, Date})}
        />
      </WrapButton>
    </WrapAddIngredient>
  );
}
