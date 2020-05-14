import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess, ActionTypes, IAddToWatchlistRequestAction, IMarkAsWatchedRequestAction, loadData as getUpdatedData } from './actions';
import { IFetchUserDataResponse } from '../../api/userData';
import Api from '../../api';

const apiInstance = new Api();

function* loadData() {
  const data: IFetchUserDataResponse = yield call(apiInstance.fetchUserData);
  yield put(loadDataSuccess(data));
}

function* addToWatchlist(action: IAddToWatchlistRequestAction) {
  const title = action.payload?.title || '';
  const user = action.payload?.user || '';
  // const data: TODO = yield call(apiInstance.addToWatchList, { title, user });
  yield call(apiInstance.addToWatchList, { title, user });
  yield put(getUpdatedData());
}

function* markAsWatched(action: IMarkAsWatchedRequestAction) {
  const title = action.payload?.title || '';
  const user = action.payload?.user || '';
  // const data: TODO = yield call(apiInstance.markAsWatched, { title, user });
  yield call(apiInstance.markAsWatched, { title, user });
  yield put(getUpdatedData());
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_DATA_REQUEST, loadData),
    takeEvery(ActionTypes.ADD_TO_WATCHLIST_REQUEST, addToWatchlist),
    takeEvery(ActionTypes.MARK_AS_WATCHED_REQUEST, markAsWatched),
  ]);
}
