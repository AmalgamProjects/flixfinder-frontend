import AuthReducer from './auth/reducer';
import MoviesReducer from '../components/containers/Movies/reducers';
import MovieDetailsReducer from '../components/containers/MovieDetails/reducers';
import Auth from '../components/containers/Auth/reducers';
import UserData from './userData/reducer';
import Search from '../components/containers/HeaderSearch/reducers';

const reducers = {
  AuthReducer,
  MoviesReducer,
  MovieDetailsReducer,
  Auth,
  UserData,
  Search,
};

export default reducers;
