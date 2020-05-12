import { ITestAppState } from '../components/containers/SagaApp/reducers';
import { IMoviesState } from '../components/containers/Movies/reducers';
import { ILoginState } from '../components/containers/Login/reducers';

export interface IBaseAction {
  type: string;
  payload?: any;
}

export interface IRootState {
  SagaAppReducer: ITestAppState;
  MoviesReducer: IMoviesState;
  UserReducer: ILoginState;
}
