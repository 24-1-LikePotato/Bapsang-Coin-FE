import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

let navigate;
let alertShown = false;

export const setNavigate = (navFunction) => {
  navigate = navFunction;
};

const apiClient = axios.create({
  baseURL: 'https://zipbab-coin.p-e.kr',
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    const token = cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // 토큰 만료 에러인지 확인
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (err) {
        console.error('Failed to refresh token:', err);
        // refreshToken 요청 실패 시 로그아웃 및 로그인 창으로 이동
        if (!alertShown) {
          alert('세션이 만료되었습니다. 다시 로그인 후 시도해 해주세요.');
          alertShown = true;
        }
        if (navigate) {
          navigate('/login');
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

// accessToken 갱신 함수
const refreshAccessToken = async () => {
  try {
    const refreshToken = cookies.get('refreshToken');

    if (!refreshToken) {
      throw new Error('No refreshToken found');
    }

    const response = await axios.post('https://zipbab-coin.p-e.kr/account/token/refresh', {
      refresh: `${refreshToken}`,
    });

    const newAccessToken = response.data.access;
    const accessTokenExpiry = new Date();

    accessTokenExpiry.setHours(accessTokenExpiry.getHours() + 1);
    cookies.set('accessToken', newAccessToken, {
      path: '/',
      secure: true, // HTTPS를 사용하지 않는 경우 false로 설정
      expires: accessTokenExpiry,
    });

    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    throw error;
  }
};

// 토큰 유효성 검사
export const checkTokenValidity = async () => {
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');

  if (!accessToken || !refreshToken) {
    return false;
  } else {
    return true;
  }
};

export default apiClient;
