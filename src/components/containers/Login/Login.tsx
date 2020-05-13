import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { login, logout } from './actions';
import { ILoginState } from './reducers';
import { withRouter, RouteComponentProps } from 'react-router';
import { IRootState } from '../../../types/redux';
import { FirebaseUser } from '../../../types/user';
import { LoginButton } from '..';

interface IOwnProps {}
interface IConnectedProps { state: ILoginState; }
interface IConnectedDispatchProps {
  onLogin: typeof login;
  onLogout: typeof logout;
}
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps & RouteComponentProps;

class Login extends Component<Props> {
  handleOnLogin = (params: FirebaseUser) => {
    const { onLogin, history } = this.props;
    onLogin(params);
    history.push('/');
  };

  handleOnLogout = () => {
    const { onLogout, history } = this.props;
    onLogout();
    history.push('/login');
  };

  render() {
    const { state } = this.props;

    return (
      <div>
        <LoginButton
          isLoggedIn={!!state.user}
          onLogin={this.handleOnLogin}
          onLogout={this.handleOnLogout}
        />
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
)(withRouter(Login));
