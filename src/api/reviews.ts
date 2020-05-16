import axios from 'axios';
import { IReview } from '../types/review';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';

export interface IFetchReviewsResponse {
  results: IReview[];
}

export interface IFetchReviewsParams {
  id: string;
}

export interface IFetchReviews {
  (params: IFetchReviewsParams): Promise<IFetchReviewsResponse | null>;
}

export const fetchReviews = (params: IFetchReviewsParams) => {
  const accessToken = getAuthData()?.accessToken;

  return axios
    .request<IFetchReviewsResponse>(
      {
        baseURL: settings.apiUrl,
        method: 'GET',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        url: `/x/reviews/${params.id}`,
      },
    )
    .then(res => res.data.results)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};
