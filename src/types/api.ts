import { IFetchMovies, IFetchMovieDetails } from '../api/movies';

export interface IApi {
  fetchMovies: IFetchMovies;
  fetchMovieDetails: IFetchMovieDetails
}
