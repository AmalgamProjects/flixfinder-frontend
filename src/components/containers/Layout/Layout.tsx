import * as React from 'react';
import { Footer } from '../../presentationals';
import { Header } from '..';
import Styles from './Layout.module.css';
import Slider from '../Slider/Slider';

const Layout: React.SFC = ({ children }) => (
  <div className={Styles.wrapper}>
    <Header />
    <Slider />
    <div className={Styles.content}>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
