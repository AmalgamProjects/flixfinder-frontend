import { ILoginResponse, ILoginParams } from '../../../../api/login';

const ROOT = 'USER_';
export const ActionTypes = {
  LOGIN_REQUEST: `${ROOT}LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${ROOT}LOGIN_SUCCESS`,
};

export type ILoginRequestAction = {
  type: typeof ActionTypes.LOGIN_REQUEST;
  payload: ILoginParams;
}

export type ILoginSuccessAction = {
  type: typeof ActionTypes.LOGIN_SUCCESS;
  payload?: ILoginResponse;
}

export const login = (payload: ILoginParams): ILoginRequestAction => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload?: ILoginResponse): ILoginSuccessAction => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload,
});
