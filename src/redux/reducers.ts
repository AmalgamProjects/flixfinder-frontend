import AuthReducer from './auth/reducer';
import MoviesReducer from '../components/containers/Movies/reducers';
import MovieDetailsReducer from '../components/containers/MovieDetails/reducers';
import UserReducer from '../components/containers/Auth/reducers';

const reducers = {
  AuthReducer,
  MoviesReducer,
  MovieDetailsReducer,
  UserReducer,
};

export default reducers;
