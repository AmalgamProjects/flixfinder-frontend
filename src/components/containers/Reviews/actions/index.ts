import { IFetchReviewsResponse, IFetchReviewsParams } from '../../../../api/reviews';

const ROOT = 'REVIEWS_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
};

export type ILoadReviewsRequestAction = {
  type: typeof ActionTypes.LOAD_DATA_REQUEST;
  payload?: IFetchReviewsParams;
}

export type ILoadReviewsSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchReviewsResponse;
}

export const loadData = (data: IFetchReviewsParams): ILoadReviewsRequestAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: data,
});

export const loadDataSuccess = (data?: IFetchReviewsResponse): ILoadReviewsSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
