import axios from 'axios';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';
import { ISearchResponse } from '../types/search';

export interface ISearchParams {
  search: string;
  titleType?: string;
}

export interface IFetchSearch {
  (params: ISearchParams): Promise<ISearchResponse | null>;
}


export const search = (params: ISearchParams) => {
  const baseURL = settings.apiUrl;
  const accessToken = getAuthData()?.accessToken;

  return axios
    .request<ISearchResponse>(
      {
        baseURL,
        method: 'GET',
        params,
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        url: '/title/',
        // cancelToken: apiInstance.source.token,
      },
    )
    .then(res => res.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};
