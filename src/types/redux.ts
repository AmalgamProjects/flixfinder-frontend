import { IMoviesState } from '../components/containers/Movies/reducers';
import { IAuthState } from '../components/containers/Auth/reducers';
import { IMovieDetailsState } from '../components/containers/MovieDetails/reducers';
import { ISearchState } from '../components/containers/HeaderSearch/reducers';
import { IMoreLikeThisState } from '../components/containers/MoreLikeThis/reducers';
import { IReviewsState } from '../components/containers/Reviews/reducers';
import { IUserDataState } from '../redux/userData/reducer';

export interface IBaseAction {
  type: string;
  payload?: any;
}

export interface IRootState {
  MoviesReducer: IMoviesState;
  MovieDetailsReducer: IMovieDetailsState;
  Auth: IAuthState;
  UserData: IUserDataState;
  Search: ISearchState;
  MoreLikeThis: IMoreLikeThisState;
  Reviews: IReviewsState;
}
