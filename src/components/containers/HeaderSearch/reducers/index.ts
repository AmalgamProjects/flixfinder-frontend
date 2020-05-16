import { ILoadSearchSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IBaseAction } from '../../../../types/redux';
import { IMovie } from '../../../../types/movie';

export type ISearchState = {
  count: number;
  results: IMovie[];
  isLoading: boolean;
}

const initialState: ISearchState = {
  count: 0,
  results: [],
  isLoading: false,
};

function handleOnClearStore() {
  return { ...initialState };
}

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
    isLoading: false,
  };
}

function handleClearSuggestions(state: ISearchState, action: IBaseAction) {
  return {
    ...state,
    results: action.payload,
  };
}

export default createReducer(initialState, {
  [ActionTypes.CLEAR_STORE]: handleOnClearStore,
  [ActionTypes.LOAD_DATA_REQUEST]: handleOnLoadRequest,
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
  [ActionTypes.CLEAR_SUGGESTIONS]: handleClearSuggestions,
});
