import { IApi } from '../types/api';
import { fetchMovies, fetchMovieDetails } from './movies';
import { fetchUserData } from './userData';

class Api implements IApi {
  fetchMovies = fetchMovies;

  fetchUserData = fetchUserData;

  fetchMovieDetails = fetchMovieDetails;
}

export default Api;
