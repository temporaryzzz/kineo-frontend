//IMPORTS
import axios from 'axios';
import { queryClient } from '@/data/shared/queryClient';

//TYPES
import type { AxiosInstance, AxiosError } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRedirectingToLogin = false;

function redirectToLogin() {
  if (isRedirectingToLogin) {
    return;
  }

  isRedirectingToLogin = true;
  queryClient.clear();
  window.location.assign('/login');
}

//⁡⁢⁣⁡⁢⁣⁣TODO: Add a Bearer token to the axiosInstance⁡

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const isLoginRequest = error.config?.url === '/login';

    if (error.response?.status === 401 && !isLoginRequest) {
      redirectToLogin();
    }

    if (error.response?.status === 500) {
      console.error('Server error:', error.message);
    }

    return Promise.reject(error);
  },
);

export { axiosInstance };
