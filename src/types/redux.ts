import { IMoviesState } from '../components/containers/Movies/reducers';
import { ILoginState } from '../components/containers/Auth/reducers';
import { IMovieDetailsState } from '../components/containers/MovieDetails/reducers';

export interface IBaseAction {
  type: string;
  payload?: any;
}

export interface IRootState {
  MoviesReducer: IMoviesState;
  MovieDetailsReducer: IMovieDetailsState;
  UserReducer: ILoginState;
}
