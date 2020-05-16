import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Auth, Container } from '../../containers';
import Styles from './MyProfile.module.scss';
import { Heading } from '../../presentationals';
import { envelope } from '../../../assets/icons';
import { IAuthState } from '../../containers/Auth/reducers';
import { IRootState } from '../../../types/redux';

interface IConnectedProps { state: IAuthState; }
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
                  <h2 className={Styles.subHeading}>
                    <span className={Styles.icon}>{envelope}</span>Linked Email Account
                  </h2>
                  {state && state.user && state.user.email && (
                    <p className={Styles.email}>{state.user.email}</p>
                  )}
                </div>
                <div className={Styles.logout}>
                  <Auth />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default connect<IConnectedProps, {}, {}, IRootState>(
  (state: IRootState) => ({
    state: state.Auth,
  }),
)(MyProfile);
