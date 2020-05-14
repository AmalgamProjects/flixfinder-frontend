import axios from 'axios';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';
import { IUserData } from '../types/userData';

export interface IFetchUserDataResponse {
  data: IUserData;
}

export interface IFetchMovieDetails {
  (): Promise<IFetchUserDataResponse | null>;
}


export const fetchUserData = () => {
  const baseURL = settings.apiUrl;
  const accessToken = getAuthData()?.accessToken;
  const uid = getAuthData()?.uid;

  return axios
    .request<IFetchUserDataResponse>(
      {
        baseURL,
        method: 'GET',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        url: `/users/${uid}`,
      },
    )
    .then(res => res.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};
