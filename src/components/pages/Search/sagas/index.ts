import { all, call, put, takeLatest, cancelled } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes, ILoadSearchPageRequestAction } from '../actions';
import { ISearchResponse } from '../../../../types/search';
import Api from '../../../../api';

const apiInstance = new Api();

function* loadData(action: ILoadSearchPageRequestAction) {
  try {
    const search = action.payload?.search || '';
    const titleType = action.payload?.titleType || '';

    const data: ISearchResponse = yield call(apiInstance.search, { search, titleType });
    yield put(loadDataSuccess(data));
  } finally {
    if (yield cancelled()) {
      // logic that should execute only on Cancellation
      apiInstance.source.cancel('canceled..');
    }
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
