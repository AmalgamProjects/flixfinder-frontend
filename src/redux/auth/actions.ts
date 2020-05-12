const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  checkAuthorization: () => ({
    type: actions.CHECK_AUTHORIZATION,
  }),

  login: (data: any) => ({
    type: actions.LOGIN_REQUEST,
    payload: data,
  }),
};

export default actions;
