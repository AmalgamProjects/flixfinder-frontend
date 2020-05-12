import axios from 'axios';
import settings from '../settings';

export interface ILoginResponse {}

export interface ILoginParams {}

export interface ILogin {
  (params: ILoginParams): Promise<ILoginResponse | null>;
}

const login = (params: ILoginParams) => axios
  .request<ILoginResponse>(
    {
      baseURL: settings.apiUrl,
      method: 'GET',
      params,
      url: '/login',
    },
  )
  .then(res => res.data)
  .catch(error => {
    console.error('error: ', error);
    return null;
  });

export default login;
