import { ILoadReviewsSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IReview } from '../../../../types/review';

export type IReviewsState = {
  results: IReview[];
}

const initialState: IReviewsState = {
  results: [],
};

function handleOnLoadSuccess(state: IReviewsState, action: ILoadReviewsSuccessAction) {
  return {
    ...state,
    ...(action.payload && { results: action.payload }),
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
