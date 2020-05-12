import { IMovie } from '../types/movie';
import { getAuthData } from '../helpers/auth';

export interface IFetchMoviesResponse {
  movies: IMovie[];
}

export interface IFetchMoviesParams {}

export interface IFetchMovies {
  (params: IFetchMoviesParams): Promise<IFetchMoviesResponse | null>;
}

const accessToken = getAuthData()?.accessToken;

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

  console.log('accessToken', accessToken);

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

export default fetchMovies;
