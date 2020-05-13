import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { IRootState } from '../../../types/redux';
import { ILoginState } from '../Login/reducers';

interface IOwnProps {}
interface IConnectedProps { state: ILoginState; }
interface IConnectedDispatchProps {}
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps & RouteComponentProps;

class WithAuth extends Component<Props> {
  componentDidMount() {
    const { state, location } = this.props;

    if (location.pathname !== '/login') {
      if (!state.user) {
        this.redirectToLoginView();
      }
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { state, location } = this.props;

    if (location !== prevProps.location && location.pathname !== '/login') {
      if (!state.user) {
        this.redirectToLoginView();
      }
    }
  }

  redirectToLoginView = () => {
    const { history } = this.props;
    history.push('/login');
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return null;
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.UserReducer,
  }),
  {},
)(withRouter(WithAuth));
