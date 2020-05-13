import * as React from 'react';
import { Link } from 'react-router-dom';
import Styles from './HeaderLink.module.scss';

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
