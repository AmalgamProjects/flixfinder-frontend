import * as React from 'react';
import Styles from './HeaderLink.module.css';
import { Link } from 'react-router-dom';

interface IOwnProps {
  label: string;
  icon: JSX.Element;
  url: string;
}

const HeaderLink: React.FC<IOwnProps> = ({ label, icon, url }) => (
  <div className={Styles.wrapper}>
    <Link to={url}>
      <span className={Styles.icon}>{icon}</span>
      <span className={Styles.label}>{label}</span>
    </Link>
  </div>
);

export default HeaderLink;
