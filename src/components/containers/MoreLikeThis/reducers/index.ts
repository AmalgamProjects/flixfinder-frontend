import { ILoadMoreLikeThisSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IMovie } from '../../../../types/movie';

export type IMoreLikeThisState = {
  results: IMovie[];
}

const initialState: IMoreLikeThisState = {
  results: [],
};

function handleOnLoadSuccess(state: IMoreLikeThisState, action: ILoadMoreLikeThisSuccessAction) {
  return {
    ...state,
    ...(action.payload && { results: action.payload }),
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
