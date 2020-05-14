import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { login, logout } from './actions';
import { IAuthState } from './reducers';
import { IRootState } from '../../../types/redux';
import { FirebaseUser } from '../../../types/user';
import { FirebaseAuth } from '..';

interface IOwnProps {}
interface IConnectedProps { state: IAuthState; }
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
        <FirebaseAuth
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
    state: state.Auth,
  }),
  (dispatch: Dispatch) => ({
    onLogin: params => dispatch(login(params)),
    onLogout: () => dispatch(logout()),
  }),
)(withRouter(Login));
