import React from "react";
import { useFetchUserToken } from "../apis/KakaoAuth";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Background = styled.div`
  min-height: 100vh;
  background-color: #fff7ec;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const LoginText = styled.p`
  font-size: 1.2rem;
  color: #ffaa2f;
  font-family: "GongGothicBold";
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  font-size: 2rem;
  color: #ffaa2f;
  animation: spin 2s linear infinite;
  z-index: 2;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function KakaoLogin() {
  const { loginInfo } = useFetchUserToken();
  return (
    <Background>
      <LoadingIcon />
      <LoginText>로그인 중...</LoginText>
    </Background>
  );
}
