import { IApi } from '../types/api';
import { fetchMovies, fetchMovieDetails } from './movies';
import { fetchUserData, addToWatchList, markAsWatched } from './userData';

class Api implements IApi {
  fetchMovies = fetchMovies;

  fetchUserData = fetchUserData;

  fetchMovieDetails = fetchMovieDetails;

  addToWatchList = addToWatchList;

  markAsWatched = markAsWatched;
}

export default Api;
