import * as React from 'react';
import { Footer, ScrollToTopOnMount } from '../../presentationals';
import { Header } from '..';
import Styles from './Layout.module.scss';

const Layout: React.SFC = ({ children }) => (
  <div className={Styles.wrapper}>
    <Header />
    <ScrollToTopOnMount />
    <div className={Styles.content}>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
