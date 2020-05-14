import * as React from 'react';
import { Link } from 'react-router-dom';
import Styles from './HeaderLink.module.scss';
import cx from 'classnames';

interface IOwnProps {
  label: string;
  icon: JSX.Element;
  url: string;
  pathname: string;
}

const HeaderLink: React.FC<IOwnProps> = ({ label, icon, url, pathname }) => {
  const wrapperClassNames = cx({
    [Styles.wrapper]: true,
    [Styles.wrapperCurrent]: pathname === url
  });

  return (
    <div className={wrapperClassNames}>
      <Link to={url}>
        <span className={Styles.icon}>{icon}</span>
        <span className={Styles.label}>{label}</span>
      </Link>
    </div>
  )
}

export default HeaderLink;
