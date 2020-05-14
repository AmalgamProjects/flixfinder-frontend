import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes } from './actions';
import { IFetchUserDataResponse } from '../../api/userData';
import Api from '../../api';

const apiInstance = new Api();

function* loadData() {
  const data: IFetchUserDataResponse = yield call(apiInstance.fetchUserData);
  yield put(loadDataSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
