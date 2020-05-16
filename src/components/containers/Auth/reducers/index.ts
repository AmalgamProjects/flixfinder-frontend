import { ILoginSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { FirebaseUser } from '../../../../types/user';

export type IAuthState = {
  user: FirebaseUser | null;
}

const initialState: IAuthState = {
  user: null,
};

function handleLoginSuccess(state: IAuthState, action: ILoginSuccessAction) {
  return {
    ...state,
    user: { ...action.payload },
  };
}

function handleLogoutSuccess(state: IAuthState) {
  return {
    ...state,
    user: null,
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOGIN_SUCCESS]: handleLoginSuccess,
  [ActionTypes.LOGOUT_SUCCESS]: handleLogoutSuccess,
});
