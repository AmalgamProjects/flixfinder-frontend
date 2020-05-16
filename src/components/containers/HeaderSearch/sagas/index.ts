import { all, call, put, takeLatest, delay, cancelled } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes, ILoadSearchRequestAction } from '../actions';
import { ISearchResponse } from '../../../../types/search';
import Api from '../../../../api';

const apiInstance = new Api();

function* loadData(action: ILoadSearchRequestAction) {
  try {
    const search = action.payload?.search || '';
    const titleType = action.payload?.titleType || '';
    const onlytitles = action.payload?.onlytitles || false;

    yield delay(800);

    const data: ISearchResponse = yield call(apiInstance.search, { search, titleType, onlytitles });
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
