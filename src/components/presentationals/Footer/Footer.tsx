import * as React from 'react';
import Styles from './Footer.module.css';
import { footerLogo } from '../../../assets/icons';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={Styles.wrapper}>
      {footerLogo}
      <div className={Styles.copyright}>© {year}</div>
    </div>
  );
};

export default Footer;
