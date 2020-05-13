import * as React from 'react';
import { Link } from 'react-router-dom';
import { logo, logoSmall } from '../../../assets/icons';
import Styles from './Logo.module.scss';

interface IOwnProps {
  url?: string;
}

const Logo: React.FC<IOwnProps> = ({ url }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.logo}>{url ? <Link to={url}>{logo}</Link> : logo}</div>
    <div className={Styles.logoSmall}>{url ? <Link to={url}>{logoSmall}</Link> : logoSmall}</div>
  </div>
);

export default Logo;
