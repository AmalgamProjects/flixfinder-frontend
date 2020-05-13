import React, { Component } from 'react';
import { Layout, Login, Container } from '../../containers';
import Styles from './MyProfile.module.scss';
import { Heading } from '../../presentationals';
import { envelope } from '../../../assets/icons';
import { ILoginState } from '../../containers/Login/reducers';
import { connect } from 'react-redux';
import { IRootState } from '../../../types/redux';

interface IConnectedProps { state: ILoginState; }
type Props = IConnectedProps;

class MyProfile extends Component<Props> {
  render() {
    const { state } = this.props;

    return (
      <Layout>
        <div className={Styles.wrapper}>
          <Container>
            <div className={Styles.content}>
              <Heading title="My Profile" size="big" />
              <div className={Styles.panel}>
                <div>
                  <h2 className={Styles.subHeading}><span className={Styles.icon}>{envelope}</span>Linked Email Account</h2>
                  {state && state.user && state.user.email && <p className={Styles.email}>{state.user.email}</p>}
                </div>
                <div>
                  <Login />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default connect<IConnectedProps, {}, {}, IRootState>(
  (state: IRootState) => ({
    state: state.UserReducer,
  }),
)(MyProfile);
