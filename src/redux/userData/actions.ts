import { IBaseAction } from '../../types/redux';
import { IFetchUserDataResponse, IAddToWatchlistParams, IMarkAsWatchedParams } from '../../api/userData';

const ROOT = 'USER_DATA_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
  ADD_TO_WATCHLIST_REQUEST: `${ROOT}ADD_TO_WATCHLIST_REQUEST`,
  MARK_AS_WATCHED_REQUEST: `${ROOT}MARK_AS_WATCHED_REQUEST`,
};

export type ILoadUserDataSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchUserDataResponse;
}

export type IAddToWatchlistRequestAction = {
  type: typeof ActionTypes.ADD_TO_WATCHLIST_REQUEST;
  payload?: IAddToWatchlistParams;
}

export type IMarkAsWatchedRequestAction = {
  type: typeof ActionTypes.ADD_TO_WATCHLIST_REQUEST;
  payload?: IAddToWatchlistParams;
}

export const loadData = (): IBaseAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: null,
});

export const loadDataSuccess = (data?: IFetchUserDataResponse): ILoadUserDataSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});

export const addToWatchlist = (payload: IAddToWatchlistParams): IAddToWatchlistRequestAction => ({
  type: ActionTypes.ADD_TO_WATCHLIST_REQUEST,
  payload,
});

export const markAsWatched = (payload: IMarkAsWatchedParams): IMarkAsWatchedRequestAction => ({
  type: ActionTypes.MARK_AS_WATCHED_REQUEST,
  payload,
});
