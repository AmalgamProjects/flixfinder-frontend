import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes, ILoadReviewsRequestAction } from '../actions';
import { IFetchReviewsResponse } from '../../../../api/reviews';
import Api from '../../../../api';

const apiInstance = new Api();

function* loadData(action: ILoadReviewsRequestAction) {
  const id = action.payload?.id || '';
  const data: IFetchReviewsResponse = yield call(apiInstance.fetchReviews, { id });
  yield put(loadDataSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
  ]);
}
