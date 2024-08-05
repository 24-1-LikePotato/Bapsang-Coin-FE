import React, { useEffect } from 'react';
import styled from 'styled-components';
import GongGothicBoldFontStyle from '../components/fonts/GongGothicBoldFontStyle';
import { useKakaoLogin } from '../apis/KakaoAuth';
import { checkTokenValidity } from '../apis/ApiClient';
import { useNavigate } from 'react-router-dom';

export default function LoginMain() {
  const { handleLogin } = useKakaoLogin();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const isLogIn = await checkTokenValidity();
      if (isLogIn) {
        navigate('/home');
      }
    };

    checkLogin();
  }, [navigate]);

  return (
    <WrapLoginMain>
      <GongGothicBoldFontStyle />
      <BowlRiceImg src='/assets/icons/bowl-rice.png' />
      <LoginMainTxt>집밥코인</LoginMainTxt>
      <WrapLoginBtn>
        <KakaoAuthImg src='/assets/images/kakao_login_btn.png' onClick={handleLogin} />
      </WrapLoginBtn>
    </WrapLoginMain>
  );
}

const WrapLoginMain = styled.div`
  background-color: #ffaa2f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BowlRiceImg = styled.img`
  margin-top: 10vh;
  height: 15vh;
  width: 15vh;
`;
const WrapLoginBtn = styled.div`
  padding: 25vh 0 1vh 0;
`;

const KakaoAuthImg = styled.img`
  height: 5.5vh;
  cursor: pointer;
`;

const LoginMainTxt = styled.div`
  color: #ffffff;
  font-size: 6vh;
  font-family: 'GongGothicBold', sans-serif;
  margin: 1vh;
  text-align: center;
`;
