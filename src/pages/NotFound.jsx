import React from 'react';
import styled from 'styled-components';
import "../components/fonts/OpenSans.css";
import { useNavigate } from 'react-router-dom';
import StyledButton from "../components/Button/StyledButton"
import StyledIcon from '../components/Button/StyledIcon';
import { SlArrowLeft } from 'react-icons/sl';

const WrapNotFound = styled.div`
  max-width: 430px;
  background-color: #fff7ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 431px) {
    border-left: 0.5px solid #eee;
    border-right: 0.5px solid #eee;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftButton = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-family: 'OpenSans';
  font-size: 1.25rem;
  font-weight: 700;
  color: #3d3d3d;
`;

const BodyWrapper = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  white-space:pre-wrap;
`

const Name = styled.div`
  align-text: center;
  font-family: 'OpenSans';
  font-size: 2rem;
  font-weight: 600;
  color: #3d3d3d;
`

const LargeNumber = styled.span`
  font-size: 2.5rem;
`;

const Text = styled.div`
  margin: 2rem 0 7rem 0;
  align-text: center;
  font-family: 'OpenSans';
  font-size: 1rem;
  font-weight: 400;
  color: #3d3d3d;
`

export default function NotFound() {
  const navigate = useNavigate();
  const NameText = (
    <>
      <LargeNumber>404</LargeNumber>
      <br />
      NOT FOUND
    </>
  );

  const text = `잘못된 경로로 오셨어요.
집으로 다시 안내해 드릴게요!`

  return (
    <WrapNotFound>
      <HeaderWrapper>
        <LeftButton onClick={() => navigate(-1)}>
          <StyledIcon as={SlArrowLeft} width='21px' height='20px' />
        </LeftButton>
        <Title>아이쿠!</Title>
      </HeaderWrapper>
      <BodyWrapper>
        <Name>{NameText}</Name>
        <Text>{text}</Text>
        <StyledButton
            width='11.875rem'
            text='홈 화면으로 이동'
            color='#F5F4F1'
            buttoncolor='#FFAA2F'
            onClick={() => navigate("/Home")}
          />
      </BodyWrapper>
    </WrapNotFound>
  );
}
