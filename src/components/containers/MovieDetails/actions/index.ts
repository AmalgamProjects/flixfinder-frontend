import { IFetchMovieDetailsResponse, IFetchMovieDetailsParams } from '../../../../api/movies';

const ROOT = 'MOVIE_DETAILS_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
  CLEAR_STORE: `${ROOT}CLEAR_STORE`,
};

export type ILoadMovieDetailsRequestAction = {
  type: typeof ActionTypes.LOAD_DATA_REQUEST;
  payload: IFetchMovieDetailsParams;
}

export type ILoadMovieDetailsSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchMovieDetailsResponse;
}

export const clearStore = () => ({
  type: ActionTypes.CLEAR_STORE,
});

export const loadData = (data: IFetchMovieDetailsParams): ILoadMovieDetailsRequestAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: data,
});

export const loadDataSuccess = (data?: IFetchMovieDetailsResponse): ILoadMovieDetailsSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
