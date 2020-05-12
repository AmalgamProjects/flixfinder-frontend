import { IApi } from '../types/api';
import { fetchMovies, fetchMovieDetails } from './movies';

class Api implements IApi {
  fetchMovies = fetchMovies;

  fetchMovieDetails = fetchMovieDetails;
}

export default Api;
