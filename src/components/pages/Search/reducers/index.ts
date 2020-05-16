import { ILoadSearchPageSuccessAction, ActionTypes } from '../actions';
import { createReducer } from '../../../../helpers/reducer';
import { IMovie } from '../../../../types/movie';

export type ISearchPageState = {
  count: number;
  results: IMovie[];
  isLoading: boolean;
}

const initialState: ISearchPageState = {
  count: 0,
  results: [],
  isLoading: false,
};

function handleOnClearStore() {
  return { ...initialState };
}

function handleOnLoadRequest(state: ISearchPageState) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleOnLoadSuccess(state: ISearchPageState, action: ILoadSearchPageSuccessAction) {
  return {
    ...state,
    ...(action.payload && { ...action.payload }),
    isLoading: false,
  };
}


export default createReducer(initialState, {
  [ActionTypes.CLEAR_STORE]: handleOnClearStore,
  [ActionTypes.LOAD_DATA_REQUEST]: handleOnLoadRequest,
  [ActionTypes.LOAD_DATA_SUCCESS]: handleOnLoadSuccess,
});
