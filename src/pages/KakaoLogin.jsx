import React from 'react';
import { useFetchUserToken } from '../apis/KakaoAuth';

export default function KakaoLogin() {
  const { loginInfo } = useFetchUserToken();
  return <div>로그인 중...</div>;
}
