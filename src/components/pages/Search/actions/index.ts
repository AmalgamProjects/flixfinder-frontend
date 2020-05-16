import { ISearchParams } from '../../../../api/search';
import { ISearchResponse } from '../../../../types/search';

const ROOT = 'SEARCH_PAGE_';
export const ActionTypes = {
  CLEAR_STORE: `${ROOT}CLEAR_STORE`,
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
};

export type ILoadSearchPageRequestAction = {
  type: typeof ActionTypes.LOAD_DATA_REQUEST;
  payload?: ISearchParams;
}

export type ILoadSearchPageSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: ISearchResponse;
}

export const clearStore = () => ({
  type: ActionTypes.CLEAR_STORE,
});

export const loadData = (payload: ISearchParams): ILoadSearchPageRequestAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload,
});

export const loadDataSuccess = (data?: ISearchResponse): ILoadSearchPageSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
