import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import moviesSaga from '../components/containers/Movies/sagas';
import loginSaga from '../components/containers/Login/sagas';

export default function* rootSaga() {
  const sagas = [
    authSagas(),
    moviesSaga(),
    loginSaga(),
  ];
  yield all(sagas);
}
