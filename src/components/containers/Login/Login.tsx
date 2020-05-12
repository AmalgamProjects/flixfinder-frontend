import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { login, logout } from './actions';
import { ILoginState } from './reducers';
import { IRootState } from '../../../types/redux';
import { FirebaseUser } from '../../../types/user';
import { LoginButton } from '..';

interface IOwnProps {}
interface IConnectedProps { state: ILoginState; }
interface IConnectedDispatchProps {
  onLogin: typeof login;
  onLogout: typeof logout;
}
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Login extends Component<Props> {
  handleOnLogin = (params: FirebaseUser) => {
    const { onLogin } = this.props;
    onLogin(params);
  };

  handleOnLogout = () => {
    const { onLogout } = this.props;
    onLogout();
  };

  render() {
    return (
      <div>
        <LoginButton onLogin={this.handleOnLogin} onLogout={this.handleOnLogout} />
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.UserReducer,
  }),
  (dispatch: Dispatch) => ({
    onLogin: params => dispatch(login(params)),
    onLogout: () => dispatch(logout()),
  }),
)(Login);
