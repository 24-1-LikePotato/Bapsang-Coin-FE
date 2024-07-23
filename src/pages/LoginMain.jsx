import React from 'react';
import styled from 'styled-components';
import GongGothicFontStyle from '../components/fonts/GongGothicFontStyle';
import { Link } from 'react-router-dom';

const WrapLoginMain = styled.div`
  background-color: #ffaa2f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BowlRiceImg = styled.img`
  margin-top: 233px;
  height: 111px;
  width: 111px;
`;

const KakaoAuthImg = styled.img`
  margin: 237px 0 121px 0;
  cursor: pointer;
`;

const LoginMainTxt = styled.div`
  color: #ffffff;
  font-size: 3rem;
  font-family: 'GongGothic', sans-serif;
  font-weight: bold;
  margin: 9px;
`;

export default function LoginMain() {
  return (
    <WrapLoginMain>
      <GongGothicFontStyle />
      <BowlRiceImg src='/assets/icons/bowl-rice.png' />
      <LoginMainTxt>집밥코인</LoginMainTxt>
      <Link to='/home'>
        <KakaoAuthImg src='/assets/images/kakao_login_btn.png' />
      </Link>
    </WrapLoginMain>
  );
}
