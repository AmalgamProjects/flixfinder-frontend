import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from './actions';
import { ITestAppState } from './reducers';
import { IRootState } from '../../../types/redux';
import { Movies } from '..';

interface IOwnProps {}
interface IConnectedProps { state: ITestAppState; }
interface IConnectedDispatchProps { onRequestNewNumber: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class SagaApp extends Component<Props> {
  render() {
    const { onRequestNewNumber, state } = this.props;

    return (
      <div>
        {state.numberCollection.map(item => <div key={item}>item: {item}</div>)}
        <button onClick={onRequestNewNumber}>Request new number</button>
        <div>
          <Movies />
        </div>
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.SagaAppReducer,
  }),
  (dispatch: Dispatch) => ({
    onRequestNewNumber: () => dispatch(loadData()),
  }),
)(SagaApp);
