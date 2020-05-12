import { IBaseAction } from '../../../../types/redux';
import { IFetchMoviesResponse } from '../../../../api/movies';

const ROOT = 'MOVIES_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
};

export type ILoadMoviesSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchMoviesResponse;
}

export const loadData = (): IBaseAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: null,
});

export const loadDataSuccess = (data?: IFetchMoviesResponse): ILoadMoviesSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
