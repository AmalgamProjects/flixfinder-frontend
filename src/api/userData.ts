import axios from 'axios';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';
import { IUserData } from '../types/userData';

export interface IFetchUserDataResponse {
  data: IUserData;
}

export interface IAddToWatchlistParams {
  title: string;
  user: string; // firebase uid
}

export interface IMarkAsWatchedParams {
  title: string;
  user: string; // firebase uid
}

export interface IFetchMovieDetails {
  (params: IAddToWatchlistParams): Promise<IFetchUserDataResponse | null>;
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

export const addToWatchList = (data: IAddToWatchlistParams) => {
  const baseURL = settings.apiUrl;
  const accessToken = getAuthData()?.accessToken;

  return axios
    .request<IFetchUserDataResponse>(
      {
        baseURL,
        method: 'POST',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        data,
        url: '/watch/',
      },
    )
    .then(res => res.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};

export const markAsWatched = (data: IMarkAsWatchedParams) => {
  const baseURL = settings.apiUrl;
  const accessToken = getAuthData()?.accessToken;

  return axios
    .request<IFetchUserDataResponse>(
      {
        baseURL,
        method: 'POST',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        data,
        url: '/seen/',
      },
    )
    .then(res => res.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};
