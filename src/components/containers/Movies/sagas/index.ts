import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes } from '../actions';
import { IFetchMoviesResponse } from '../../../../api/movies';
import Api from '../../../../api';

const apiInstance = new Api();

function* loadData() {
  const data: IFetchMoviesResponse = yield call(apiInstance.fetchMovies, {});
  yield put(loadDataSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
