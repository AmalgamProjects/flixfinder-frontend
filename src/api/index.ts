import axios from 'axios';
import { IApi } from '../types/api';
import { fetchMovies, fetchMovieDetails } from './movies';
import { search } from './search';
import { fetchMoreLikeThis } from './moreLikeThis';
import { fetchReviews } from './reviews';
import { fetchUserData, addToWatchList, markAsWatched } from './userData';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

class Api implements IApi {
  source = source;

  fetchMovies = fetchMovies;

  fetchUserData = fetchUserData;

  fetchMovieDetails = fetchMovieDetails;

  addToWatchList = addToWatchList;

  markAsWatched = markAsWatched;

  search = search;

  fetchMoreLikeThis = fetchMoreLikeThis;

  fetchReviews = fetchReviews;
}

export default Api;
