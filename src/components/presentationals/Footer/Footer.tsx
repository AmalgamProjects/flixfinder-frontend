import * as React from 'react';
import { Logo } from '..';
import Styles from './Footer.module.css';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={Styles.wrapper}>
      <Logo />
      <div>© {year}</div>
    </div>
  );
};

export default Footer;
