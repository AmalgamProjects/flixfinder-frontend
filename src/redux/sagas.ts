import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import moviesSaga from '../components/containers/Movies/sagas';
import movieDetailsSaga from '../components/containers/MovieDetails/sagas';
import loginSaga from '../components/containers/Auth/sagas';

export default function* rootSaga() {
  const sagas = [
    authSagas(),
    moviesSaga(),
    movieDetailsSaga(),
    loginSaga(),
  ];
  yield all(sagas);
}
