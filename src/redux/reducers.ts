import AuthReducer from './auth/reducer';
import MoviesReducer from '../components/containers/Movies/reducers';
import MovieDetailsReducer from '../components/containers/MovieDetails/reducers';
import Auth from '../components/containers/Auth/reducers';
import UserData from './userData/reducer';
import Search from '../components/containers/HeaderSearch/reducers';
import MoreLikeThis from '../components/containers/MoreLikeThis/reducers';
import Reviews from '../components/containers/Reviews/reducers';

const reducers = {
  AuthReducer,
  MoviesReducer,
  MovieDetailsReducer,
  Auth,
  UserData,
  Search,
  MoreLikeThis,
  Reviews,
};

export default reducers;
