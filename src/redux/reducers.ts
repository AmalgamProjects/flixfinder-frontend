import AuthReducer from './auth/reducer';
import MoviesReducer from '../components/containers/Movies/reducers';
import MovieDetailsReducer from '../components/containers/MovieDetails/reducers';
import Auth from '../components/containers/Auth/reducers';
import UserData from './userData/reducer';

const reducers = {
  AuthReducer,
  MoviesReducer,
  MovieDetailsReducer,
  Auth,
  UserData,
};

export default reducers;
