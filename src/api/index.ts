import { IApi } from '../types/api';
import fetchMovies from './movies';

class Api implements IApi {
  fetchMovies = fetchMovies;
}

export default Api;
