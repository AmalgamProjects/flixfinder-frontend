import AuthReducer from './auth/reducer';
import SagaAppReducer from '../components/containers/SagaApp/reducers';
import MoviesReducer from '../components/containers/Movies/reducers';
import LoginReducer from '../components/containers/Login/reducers';

const reducers = {
  AuthReducer,
  SagaAppReducer,
  MoviesReducer,
  LoginReducer,
};

export default reducers;
