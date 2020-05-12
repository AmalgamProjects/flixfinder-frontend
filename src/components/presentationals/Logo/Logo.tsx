import * as React from 'react';
import { logo } from '../../../assets/icons';
import { Link } from 'react-router-dom';
import Styles from './Logo.module.css';

interface IOwnProps {
  url?: string;
}

const Logo: React.FC<IOwnProps> = ({ url }) => (
  <div className={Styles.wrapper}>
    {url ? <Link to={url}>{logo}</Link> : logo}
  </div>
);

export default Logo;
