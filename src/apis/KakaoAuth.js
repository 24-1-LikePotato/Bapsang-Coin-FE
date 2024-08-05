import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
const redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile_nickname,profile_image,account_email`;

export const useKakaoLogin = () => {
  const handleLogin = () => {
    window.location.href = kakaoAuthUrl;
  };

  return { handleLogin };
};

export const useFetchUserToken = () => {
  const [loginInfo, setLoginInfo] = useState(null);
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      axios
        .get(`https://zipbab-coin.p-e.kr/account/kakao/callback?code=${code}`, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setLoginInfo(res.data);
          window.localStorage.setItem('userId', res.data.user_id);

          const accessTokenExpiry = new Date();
          accessTokenExpiry.setHours(accessTokenExpiry.getHours() + 1);
          // test용 access token 10초 만료
          // accessTokenExpiry.setSeconds(accessTokenExpiry.getSeconds() + 10);

          setCookie('accessToken', res.data.access_token, {
            path: '/',
            secure: false, // HTTPS를 사용하지 않는 경우 false로 설정
            expires: accessTokenExpiry,
          });

          const refreshTokenExpiry = new Date();
          refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 1);
          // test용 refresh token 15초 만료
          // refreshTokenExpiry.setSeconds(refreshTokenExpiry.getSeconds() + 15);

          setCookie('refreshToken', res.data.refresh_token, {
            path: '/',
            secure: false, // HTTPS를 사용하지 않는 경우 false로 설정
            expires: refreshTokenExpiry,
          });

          navigate('/home');
        })
        .catch((err) => {
          console.log(err);
          alert('로그인 실패! 다시 시도해주세요.');
          navigate('/login');
        });
    }
  }, [navigate, setCookie]);

  return { loginInfo };
};
