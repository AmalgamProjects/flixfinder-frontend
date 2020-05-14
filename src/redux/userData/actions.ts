import { IBaseAction } from '../../types/redux';
import { IFetchUserDataResponse } from '../../api/userData';

const ROOT = 'USER_DATA_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
};

export type ILoadUserDataSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchUserDataResponse;
}

export const loadData = (): IBaseAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: null,
});

export const loadDataSuccess = (data?: IFetchUserDataResponse): ILoadUserDataSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
