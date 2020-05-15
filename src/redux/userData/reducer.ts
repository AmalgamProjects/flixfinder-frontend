import { ILoadUserDataSuccessAction, ActionTypes } from './actions';
import { createReducer } from '../../helpers/reducer';
import { IUserData } from '../../types/userData';

export interface IUserDataState extends IUserData {
  isLoading: boolean;
  isAddToWatchlistLoading: boolean,
  isMarkAsWatchedLoading: boolean,
}

const initialState: IUserDataState = {
  email: '',
  username: '',
  url: '',
  favourites: [],
  seen: [],
  watch: [],
  recommended: [],
  isLoading: false,
  isAddToWatchlistLoading: false,
  isMarkAsWatchedLoading: false,
};

function handleOnLoadRequest(state: IUserDataState) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleOnAddToWatchlistRequest(state: IUserDataState) {
  return {
    ...state,
    isAddToWatchlistLoading: true,
  };
}

function handleOnMarkAsWatchedRequest(state: IUserDataState) {
  return {
    ...state,
    isMarkAsWatchedLoading: true,
  };
}

function handleOnLoadSuccess(state: IUserData, action: ILoadUserDataSuccessAction) {
  return {
    ...state,
    ...(action.payload && { ...action.payload }),
    isLoading: false,
    isAddToWatchlistLoading: false,
    isMarkAsWatchedLoading: false,
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_REQUEST]: handleOnLoadRequest,
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
  [ActionTypes.ADD_TO_WATCHLIST_REQUEST]: handleOnAddToWatchlistRequest,
  [ActionTypes.MARK_AS_WATCHED_REQUEST]: handleOnMarkAsWatchedRequest,
});
