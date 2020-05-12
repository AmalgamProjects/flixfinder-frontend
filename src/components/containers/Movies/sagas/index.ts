import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes } from '../actions';
import fetchMovies, { IFetchMoviesResponse } from '../../../../api/movies';


function* loadData() {
  const data: IFetchMoviesResponse = yield call(fetchMovies, {});
  yield put(loadDataSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
