import { IFetchMoreLikeThisResponse, IFetchMoreLikeThisParams } from '../../../../api/moreLikeThis';

const ROOT = 'MORE_LIKE_THIS_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
};

export type ILoadMoreLikeThisRequestAction = {
  type: typeof ActionTypes.LOAD_DATA_REQUEST;
  payload?: IFetchMoreLikeThisParams;
}

export type ILoadMoreLikeThisSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchMoreLikeThisResponse;
}

export const loadData = (data: IFetchMoreLikeThisParams): ILoadMoreLikeThisRequestAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: data,
});

export const loadDataSuccess = (data?: IFetchMoreLikeThisResponse): ILoadMoreLikeThisSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
