import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { login } from './actions';
import { ILoginState } from './reducers';
import { IRootState } from '../../../types/redux';
import { ILoginParams } from '../../../api/login';
import { LoginButton } from '..';

interface IOwnProps {}
interface IConnectedProps { state: ILoginState; }
interface IConnectedDispatchProps { onLogin: typeof login; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Login extends Component<Props> {
  handleOnLogin = (params: ILoginParams) => {
    const { onLogin } = this.props;
    onLogin(params);
  };

  render() {
    return (
      <div>
        <LoginButton onLogin={this.handleOnLogin} />
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.LoginReducer,
  }),
  (dispatch: Dispatch) => ({
    onLogin: params => dispatch(login(params)),
  }),
)(Login);
