import { ILoadMoviesSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IMovie } from '../../../../types/movie';

export type IMoviesState = {
  movies: IMovie[];
}

const initialState: IMoviesState = {
  movies: [],
};

function handleOnLoadSuccess(state: IMoviesState, action: ILoadMoviesSuccessAction) {
  return {
    ...state,
    ...(action.payload && { movies: action.payload.movies }),
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
