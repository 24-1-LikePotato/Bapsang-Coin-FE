import React from 'react';
import styled from 'styled-components';
import GongGothicFontStyle from '../components/fonts/GongGothicFontStyle';
import { Link } from 'react-router-dom';

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
  font-family: 'GongGothic', sans-serif;
  font-weight: bold;
  margin: 1vh;
  text-align: center;
`;

export default function LoginMain() {
  return (
    <WrapLoginMain>
      <GongGothicFontStyle />
      <BowlRiceImg src='/assets/icons/bowl-rice.png' />
      <LoginMainTxt>집밥코인</LoginMainTxt>
      <WrapLoginBtn>
        <Link to='/home'>
          <KakaoAuthImg src='/assets/images/kakao_login_btn.png' />
        </Link>
      </WrapLoginBtn>
    </WrapLoginMain>
  );
}
