import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import moviesSaga from '../components/containers/Movies/sagas';
import movieDetailsSaga from '../components/containers/MovieDetails/sagas';
import loginSaga from '../components/containers/Auth/sagas';
import userDataSaga from './userData/sagas';
import searchSaga from '../components/containers/HeaderSearch/sagas';
import reviewsSaga from '../components/containers/MoreLikeThis/sagas';
import moreLikeThisSaga from '../components/containers/Reviews/sagas';

export default function* rootSaga() {
  const sagas = [
    authSagas(),
    moviesSaga(),
    movieDetailsSaga(),
    loginSaga(),
    userDataSaga(),
    searchSaga(),
    moreLikeThisSaga(),
    reviewsSaga(),
  ];
  yield all(sagas);
}
