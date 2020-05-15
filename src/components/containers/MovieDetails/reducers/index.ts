import { ILoadMovieDetailsSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IMovie } from '../../../../types/movie';

export type IMovieDetailsState = {
  movie: IMovie | null;
  isLoading: boolean;
}

const initialState: IMovieDetailsState = {
  movie: null,
  isLoading: false,
};

function handleOnLoadRequest(state: IMovieDetailsState) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleOnLoadSuccess(state: IMovieDetailsState, action: ILoadMovieDetailsSuccessAction) {
  return {
    ...state,
    ...(action.payload && { movie: action.payload }),
    isLoading: false,
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_REQUEST]: handleOnLoadRequest,
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
