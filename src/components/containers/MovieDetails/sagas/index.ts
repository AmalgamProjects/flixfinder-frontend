import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes, ILoadMovieDetailsRequestAction } from '../actions';
import { IFetchMovieDetailsResponse } from '../../../../api/movies';
import Api from '../../../../api';

const apiInstance = new Api();

function* loadData(action: ILoadMovieDetailsRequestAction) {
  const data: IFetchMovieDetailsResponse = yield call(
    apiInstance.fetchMovieDetails,
    { id: action.payload.id },
  );
  yield put(loadDataSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
