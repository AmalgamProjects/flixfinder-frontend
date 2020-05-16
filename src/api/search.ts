import axios from 'axios';
import { CANCEL } from 'redux-saga';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';
import { ISearchResponse } from '../types/search';

export interface ISearchParams {
  search: string;
  titleType?: string;
  onlytitles?: boolean;
}

export interface IFetchSearch {
  (params: ISearchParams): Promise<ISearchResponse | null>;
}


export const search = (params: ISearchParams) => {
  const baseURL = settings.apiUrl;
  const accessToken = getAuthData()?.accessToken;
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const request = axios
    .request<ISearchResponse>(
      {
        baseURL,
        method: 'GET',
        params: {
          search: params.search,
          ...params.titleType && { titleType: params.titleType },
          ...params.onlytitles && { onlytitles: params.onlytitles },
        },
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        url: '/title/',
        cancelToken: source.token,
      },
    )
    .then(res => res.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });

  // @ts-ignore
  request[CANCEL] = () => source.cancel();

  return request;
};
