import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes, ILoadMoreLikeThisRequestAction } from '../actions';
import { IFetchMoreLikeThisResponse } from '../../../../api/moreLikeThis';
import Api from '../../../../api';

const apiInstance = new Api();

function* loadData(action: ILoadMoreLikeThisRequestAction) {
  const id = action.payload?.id || '';
  const data: IFetchMoreLikeThisResponse = yield call(apiInstance.fetchMoreLikeThis, { id });
  yield put(loadDataSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
