import axios from 'axios';
import { IMovie } from '../types/movie';
import settings from '../settings';
import { getAuthData } from '../helpers/auth';

export interface IFetchMoviesResponse {
  movies: IMovie[];
}

export interface IFetchMovieDetailsResponse {
  movie: IMovie;
}

export interface IFetchMoviesParams {}

export interface IFetchMovies {
  (params: IFetchMoviesParams): Promise<IFetchMoviesResponse | null>;
}

export interface IFetchMovieDetailsParams {
  id: string;
}

export interface IFetchMovieDetails {
  (params: IFetchMovieDetailsParams): Promise<IFetchMovieDetailsResponse | null>;
}

export const fetchMovies = (params: IFetchMoviesParams) => {
  console.log('fetchMovies params:', params);

  const promise = new Promise<IFetchMoviesResponse>(resolve => {
    setTimeout(() => {
      const mockResponse: IFetchMoviesResponse = {
        movies: [],
      };
      resolve(mockResponse);
    }, 200);
  });

  return promise;

  /* return axios
    .request<IFetchMoviesResponse>(
      {
        baseURL: settings.apiUrl,
        method: 'GET',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        // params,
        url: '/fetchMovies',
      },
    )
    .then(res => res.data)
    .catch(error => {
      console.error('error: ', error);
      return null;
    }); */
};

export const fetchMovieDetails = (params: IFetchMovieDetailsParams) => {
  const accessToken = getAuthData()?.accessToken;

  return axios
    .request<IFetchMovieDetailsResponse>(
      {
        baseURL: settings.apiUrl,
        method: 'GET',
        headers: {
          ...accessToken && { Authorization: `Bearer ${accessToken}` },
        },
        // params,
        url: `/title/${params.id}`,
      },
    )
    .then(res => res.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error: ', error);
      return null;
    });
};
