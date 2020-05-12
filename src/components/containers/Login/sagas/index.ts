import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loginSuccess, ActionTypes, ILoginRequestAction } from '../actions';
import login, { ILoginResponse } from '../../../../api/login';


function* loginUser(action: ILoginRequestAction) {
  const data: ILoginResponse = yield call(login, action.payload);
  yield put(loginSuccess(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOGIN_REQUEST, loginUser),
  ]);
}
