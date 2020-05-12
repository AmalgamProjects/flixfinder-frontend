import { ILoginSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';

export type ILoginState = {
  isLoggedIn: boolean;
}

const initialState: ILoginState = {
  isLoggedIn: false,
};

function handleOnLoginSuccess(state: ILoginState, action: ILoginSuccessAction) {
  console.log('handleOnLoginSuccess action', action);

  return {
    ...state,
    isLoggedIn: true,
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOGIN_SUCCESS]: handleOnLoginSuccess,
});
