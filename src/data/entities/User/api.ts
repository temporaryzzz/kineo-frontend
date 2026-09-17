import { axiosInstance } from '@/data/shared/http';
import type { User } from './UserModel';

//TODO: Promise<User>?
export async function login(body: { username: string; password: string }) {
  const response = await axiosInstance.post('/login', body);

  return response.data;
}

export async function logout() {
  const response = await axiosInstance.post('/logout');

  return response.data;
}

export async function getUser(): Promise<User> {
  const response = await axiosInstance.get('/user');

  return response.data;
}

export async function updateUser() {}
