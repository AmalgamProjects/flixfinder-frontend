import { actionTypes } from '../actions/types';
import { ITest } from '../actions';
import { createReducer } from '../../../../helpers/reducer';

export type ITestAppState = {
  numberCollection: number[];
}

const initialState: ITestAppState = {
  numberCollection: [0],
};


function handleOnLoadSuccess(state: ITestAppState, action: ITest) {
  return {
    ...state,
    numberCollection: [...state.numberCollection, action.payload],
  };
}

export default createReducer(initialState, {
  [actionTypes.GET_NUMBER_REQUEST_COMPLETED]: handleOnLoadSuccess,
});
