// import axios from 'axios';
// import settings from '../settings';
import { IMovie } from '../types/movie';

export interface IFetchMoviesResponse {
  movies: IMovie[];
}

export interface IFetchMoviesParams {}

export interface IFetchMovies {
  (params: IFetchMoviesParams): Promise<IFetchMoviesResponse | null>;
}

const fetchMovies = (params: IFetchMoviesParams) => {
  const promise = new Promise<IFetchMoviesResponse>(resolve => {
    setTimeout(() => {
      const mockResponse: IFetchMoviesResponse = {
        movies: [
          { id: '1', title: 'title 1' },
          { id: '2', title: 'title 2' },
          { id: '3', title: 'title 3' },
          { id: '4', title: 'title 4' },
          { id: '5', title: 'title 5' },
          { id: '6', title: 'title 6' },
          { id: '7', title: 'title 7' },
        ],
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
        // params,
        // url: '/fetchMovies',
      },
    )
    .then(res => res.data)
    .catch(error => {
      console.error('error: ', error);
      return null;
    }); */
}

export default fetchMovies;
