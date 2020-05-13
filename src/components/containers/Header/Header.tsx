import React, { Component } from 'react';
import { Logo, HeaderLink } from '../../presentationals';
import Styles from './Header.module.scss';
import Container from '../Container/Container';
import { watchlist, profile } from '../../../assets/icons';
import { HeaderSearch } from '..';

class Header extends Component {
  render() {
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
              <HeaderLink icon={watchlist} url='/watchlist' label="my watchlist" />
              <HeaderLink icon={profile} url='/profile' label="my profile" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
