import { IMovie } from '../types/movie';

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
        movies: [
          { id: '1', title: 'Awesome movie (1)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' },
          { id: '2', title: 'Awesome movie (2)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' },
          { id: '3', title: 'Awesome movie (3)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' },
          { id: '4', title: 'Awesome movie (4)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' },
          { id: '5', title: 'Awesome movie (5)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' },
          { id: '6', title: 'Awesome movie (6)', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg' },
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
  const promise = new Promise<IFetchMovieDetailsResponse>(resolve => {
    setTimeout(() => {
      const mockResponse: IFetchMovieDetailsResponse = {
        movie: {
          id: params.id,
          title: `Awesome movie (${params.id})`,
          imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg',
        },
      };
      resolve(mockResponse);
    }, 200);
  });

  return promise;
};
