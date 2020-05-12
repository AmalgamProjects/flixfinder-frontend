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
          { id: '1', title: 'Awesome movie (1)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg'},
          { id: '2', title: 'Awesome movie (2)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '3', title: 'Awesome movie (3)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '4', title: 'Awesome movie (4)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '5', title: 'Awesome movie (5)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '6', title: 'Awesome movie (6)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '7', title: 'Awesome movie (7)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '8', title: 'Awesome movie (8)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '9', title: 'Awesome movie (9)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '10', title: 'Awesome movie ( 10)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '11', title: 'Awesome movie (11)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
          { id: '12', title: 'Awesome movie (12)', imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg' },
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
