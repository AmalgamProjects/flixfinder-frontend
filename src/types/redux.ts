import { IMoviesState } from '../components/containers/Movies/reducers';
import { IAuthState } from '../components/containers/Auth/reducers';
import { IMovieDetailsState } from '../components/containers/MovieDetails/reducers';
import { ISearchState } from '../components/containers/HeaderSearch/reducers';
import { IUserData } from './userData';

export interface IBaseAction {
  type: string;
  payload?: any;
}

export interface IRootState {
  MoviesReducer: IMoviesState;
  MovieDetailsReducer: IMovieDetailsState;
  Auth: IAuthState;
  UserData: IUserData;
  Search: ISearchState;
}
