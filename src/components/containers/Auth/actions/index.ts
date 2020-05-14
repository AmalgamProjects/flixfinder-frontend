import { FirebaseUser } from '../../../../types/user';

const ROOT = 'USER_';
export const ActionTypes = {
  LOGIN_REQUEST: `${ROOT}LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${ROOT}LOGIN_SUCCESS`,
  LOGOUT_REQUEST: `${ROOT}LOGOUT_REQUEST`,
  LOGOUT_SUCCESS: `${ROOT}LOGOUT_SUCCESS`,
};

export type ILoginRequestAction = {
  type: typeof ActionTypes.LOGIN_REQUEST;
  payload: FirebaseUser;
}

export type ILoginSuccessAction = {
  type: typeof ActionTypes.LOGIN_REQUEST;
  payload: FirebaseUser;
}

export type ILogoutRequestAction = {
  type: typeof ActionTypes.LOGOUT_REQUEST;
  payload: null;
}

export type ILogoutSuccessAction = {
  type: typeof ActionTypes.LOGOUT_SUCCESS;
  payload: null;
}

export const login = (payload: FirebaseUser): ILoginRequestAction => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: FirebaseUser): ILoginSuccessAction => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload,
});

export const logout = (): ILogoutRequestAction => ({
  type: ActionTypes.LOGOUT_REQUEST,
  payload: null,
});

export const logoutSuccess = (): ILogoutSuccessAction => ({
  type: ActionTypes.LOGOUT_SUCCESS,
  payload: null,
});
