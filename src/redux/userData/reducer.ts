import { ILoadUserDataSuccessAction, ActionTypes } from './actions';
import { createReducer } from '../../helpers/reducer';
import { IUserData } from '../../types/userData';

export type IUserDataState = IUserData;

const initialState: IUserData = {
  email: '',
  username: '',
  url: '',
  favourites: [],
  seen: [],
  watch: [],
  recommended: [],
};

function handleOnLoadSuccess(state: IUserData, action: ILoadUserDataSuccessAction) {
  return {
    ...state,
    ...(action.payload && { ...action.payload }),
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
