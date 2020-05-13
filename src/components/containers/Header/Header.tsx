import React, { Component } from 'react';
import { Logo } from '../../presentationals';
import Styles from './Header.module.css';
import Container from '../Container/Container';
import HeaderLink from '../../presentationals/HeaderLink/HeaderLink';
import { watchlist, profile } from '../../../assets/icons';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

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
