import AuthReducer from './auth/reducer';
import SagaAppReducer from '../components/containers/SagaApp/reducers';
import MoviesReducer from '../components/containers/Movies/reducers';
import UserReducer from '../components/containers/Login/reducers';

const reducers = {
  AuthReducer,
  SagaAppReducer,
  MoviesReducer,
  UserReducer,
};

export default reducers;
