import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadDataSuccess } from '../actions';
import { actionTypes } from '../actions/types';

let initialNumber = 0;

const generateNewNumber = (): Promise<number> => {
  const promise = new Promise<number>(resolve => {
    setTimeout(() => {
      initialNumber += 1;
      resolve(initialNumber);
    }, 500);
  });

  return promise;
};

function* loadData() {
  const generatedNumber = yield call(generateNewNumber);
  yield put(loadDataSuccess(generatedNumber));
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_NUMBER_REQUEST_START, loadData),
  ]);
}
