import { IBaseAction } from '../types/redux';

export function echo(val: any) {
  return val;
}

// Join action handlers into a single reducer.
export function createReducer(initialState: any, handlers: any) {
  return (
    state = initialState,
    action: IBaseAction,
  ) => (handlers[action.type] || echo)(state, action);
}
