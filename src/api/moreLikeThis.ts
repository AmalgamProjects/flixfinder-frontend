import axios from 'axios';
import { IMovie } from '../types/movie';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';

export interface IFetchMoreLikeThisResponse {
  results: IMovie[];
}

export interface IFetchMoreLikeThisParams {
  id: string;
}

export interface IFetchMoreLikeThis {
  (params: IFetchMoreLikeThisParams): Promise<IFetchMoreLikeThisResponse | null>;
}

export const fetchMoreLikeThis = (params: IFetchMoreLikeThisParams) => {
  const accessToken = getAuthData()?.accessToken;

  return axios
    .request<IFetchMoreLikeThisResponse>(
      {
        baseURL: settings.apiUrl,
        method: 'GET',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        url: `/x/similar/${params.id}`,
      },
    )
    .then(res => res.data.results)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};
