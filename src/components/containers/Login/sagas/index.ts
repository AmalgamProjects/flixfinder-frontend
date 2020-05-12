import { all, put, takeEvery } from 'redux-saga/effects';
import { loginSuccess, logoutSuccess, ActionTypes, ILoginRequestAction } from '../actions';


function* loginUser(action: ILoginRequestAction) {
  yield put(loginSuccess(action.payload));
}

function* logoutUser() {
  console.log('logoutUser');
  yield put(logoutSuccess());
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOGIN_REQUEST, loginUser),
    takeEvery(ActionTypes.LOGOUT_REQUEST, logoutUser),
  ]);
}
