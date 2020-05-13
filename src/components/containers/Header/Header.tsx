import React from 'react';
import { Logo, HeaderLink } from '../../presentationals';
import Styles from './Header.module.scss';
import Container from '../Container/Container';
import { watchlist, profile } from '../../../assets/icons';
import { HeaderSearch } from '..';
import { withRouter, RouteComponentProps } from 'react-router';

class Header extends React.Component<RouteComponentProps<{ id: string }>> {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <div className={Styles.wrapper}>
        <Container>
          <div className={Styles.innerContainer}>
            <div className={Styles.logo}>
              <Logo url='/' />
            </div>
            <div className={Styles.search}>
              <HeaderSearch />
            </div>
            <div className={Styles.headerLinks}>
              <HeaderLink pathname={pathname} icon={watchlist} url='/watchlist' label="my watchlist" />
              <HeaderLink pathname={pathname} icon={profile} url='/profile' label="my profile" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Header);
