import { ISearchParams } from '../../../../api/search';
import { ISearchResponse } from '../../../../types/search';
import { IBaseAction } from '../../../../types/redux';

const ROOT = 'SEARCH_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
  CLEAR_SUGGESTIONS: `${ROOT}CLEAR_SUGGESTIONS`,
};

export type ILoadSearchRequestAction = {
  type: typeof ActionTypes.LOAD_DATA_REQUEST;
  payload?: ISearchParams;
}

export type ILoadSearchSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: ISearchResponse;
}

export const loadData = (payload: ISearchParams): ILoadSearchRequestAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload,
});

export const loadDataSuccess = (data?: ISearchResponse): ILoadSearchSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});

export const clearSuggestions = (): IBaseAction => ({
  type: ActionTypes.CLEAR_SUGGESTIONS,
  payload: [],
});
