import { IFetchMovieDetailsResponse, IFetchMovieDetailsParams } from '../../../../api/movies';

const ROOT = 'MOVIE_DETAILS_';
export const ActionTypes = {
  LOAD_DATA_REQUEST: `${ROOT}LOAD_DATA_REQUEST`,
  LOAD_DATA_SUCCESS: `${ROOT}LOAD_DATA_SUCCESS`,
};

export type ILoadMovieDetailsRequestAction = {
  type: typeof ActionTypes.LOAD_DATA_REQUEST;
  payload: IFetchMovieDetailsParams;
}

export type ILoadMovieDetailsSuccessAction = {
  type: typeof ActionTypes.LOAD_DATA_SUCCESS;
  payload?: IFetchMovieDetailsResponse;
}

export const loadData = (data: IFetchMovieDetailsParams): ILoadMovieDetailsRequestAction => ({
  type: ActionTypes.LOAD_DATA_REQUEST,
  payload: data,
});

export const loadDataSuccess = (data?: IFetchMovieDetailsResponse): ILoadMovieDetailsSuccessAction => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  payload: data,
});
