import { actionTypes } from './types';
import { IBaseAction } from '../../../../types/redux';

export type ITest = {
  type: typeof actionTypes.GET_NUMBER_REQUEST_START;
  payload: number;
}

export const loadData = (): IBaseAction => ({
  type: actionTypes.GET_NUMBER_REQUEST_START,
  payload: null,
});

export const loadDataSuccess = (numberGenerated: number): ITest => ({
  type: actionTypes.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated,
});
