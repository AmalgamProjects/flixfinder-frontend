import { ILoginSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { FirebaseUser } from '../../../../types/user';

export type ILoginState = {
  user: FirebaseUser | null;
}

const initialState: ILoginState = {
  user: null,
};

function handleLoginSuccess(state: ILoginState, action: ILoginSuccessAction) {
  return {
    ...state,
    user: { ...action.payload },
  };
}

function handleLogoutSuccess(state: ILoginState) {
  return {
    ...state,
    user: null,
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOGIN_SUCCESS]: handleLoginSuccess,
  [ActionTypes.LOGOUT_SUCCESS]: handleLogoutSuccess,
});
