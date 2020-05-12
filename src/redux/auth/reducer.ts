import actions from './actions';
import { createReducer } from '../../helpers/reducer';

const initState = {
  authToken: null,
};

function onLoginSuccess(state: any, { payload = {} }: any) {
  const { authToken } = payload;

  return {
    ...state,
    authToken,
  };
}

export default createReducer(initState, {
  [actions.LOGIN_SUCCESS]: onLoginSuccess,
});
