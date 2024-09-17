import { IAccessToken, IErrorResp, IUser } from './type';
import axiosIns from '@/plugins/axios';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

export async function login(params: object) {
  const options = {
    method: 'POST',
    url: `${BACKEND_URL}/login`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axiosIns.request<IAccessToken>(options);
}

export async function fetchMe() {
  const options = {
    method: 'GET',
    url: `${BACKEND_URL}/me`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axiosIns.request<IUser | IErrorResp>(options);
}

export async function fetchUser(params) {
  const options = {
    method: 'GET',
    url: `/api/user`,
    params: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axiosIns.request<Array<IUser>>(options);
}
