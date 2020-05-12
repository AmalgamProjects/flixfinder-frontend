import { ILoadMovieDetailsSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IMovie } from '../../../../types/movie';

export type IMovieDetailsState = {
  movie: IMovie | null;
}

const initialState: IMovieDetailsState = {
  movie: null,
};

function handleOnLoadSuccess(state: IMovieDetailsState, action: ILoadMovieDetailsSuccessAction) {
  return {
    ...state,
    ...(action.payload && { movie: action.payload.movie }),
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
