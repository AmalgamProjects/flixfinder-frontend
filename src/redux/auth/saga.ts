import { all, takeEvery, put, fork } from 'redux-saga/effects';
import { getAuthData } from '../../helpers/utility';
import actions from './actions';

export interface IAuthData {
  authToken: string;
}

export function* checkAuthorization() {
  // eslint-disable-next-line func-names
  yield takeEvery(actions.CHECK_AUTHORIZATION, function* () {
    const auth = getAuthData();
    if (auth) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: auth,
      });
    }
  });
}


export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    // fork(loginRequest),
    // fork(loginSuccess),
  ]);
}
