import React, { Component } from 'react';
import { Logo } from '../../presentationals';
import Styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={Styles.wrapper}>
        <Logo />
        Header
      </div>
    );
  }
}

export default Header;
