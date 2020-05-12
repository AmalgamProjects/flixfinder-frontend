import { IMoviesState } from '../components/containers/Movies/reducers';
import { ILoginState } from '../components/containers/Login/reducers';

export interface IBaseAction {
  type: string;
  payload?: any;
}

export interface IRootState {
  MoviesReducer: IMoviesState;
  UserReducer: ILoginState;
}
