import { ILoadSearchSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { ISearchResponse } from '../../../../types/search';
import { IBaseAction } from '../../../../types/redux';

export type ISearchState = {
  count: number;
  results: ISearchResponse[];
  isLoading: boolean;
}

const initialState: ISearchState = {
  count: 0,
  results: [],
  isLoading: false,
};

function handleOnLoadRequest(state: ISearchState) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleOnLoadSuccess(state: ISearchState, action: ILoadSearchSuccessAction) {
  return {
    ...state,
    ...(action.payload && { ...action.payload }),
  };
}

function handleClearSuggestions(state: ISearchState, action: IBaseAction) {
  return {
    ...state,
    results: action.payload,
  };
}

export default createReducer(initialState, {
  [ActionTypes.LOAD_DATA_REQUEST]: handleOnLoadRequest,
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
  [ActionTypes.CLEAR_SUGGESTIONS]: handleClearSuggestions,
});
