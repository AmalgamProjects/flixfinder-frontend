import * as React from 'react';
import { Link } from 'react-router-dom';
import Styles from './HeaderLink.module.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import cx from 'classnames';

interface IOwnProps {
  label: string;
  icon: JSX.Element;
  url: string;
}

class HeaderLink extends React.Component<IOwnProps & RouteComponentProps<{ id: string }>> {
  // const HeaderLink: React.FC<IOwnProps> = ({ label, icon, url }) => (
  render() {
    const { label, icon, url, location } = this.props;
    const { pathname } = location;
    const wrapper = cx({
      [Styles.wrapper]: true,
      [Styles.wrapperCurrent]: pathname === url
    });

    return (
      <div className={wrapper}>
        <Link to={url}>
          <span className={Styles.icon}>{icon}</span>
          <span className={Styles.label}>{label}</span>
        </Link>
      </div>
    )
  }
}

export default withRouter(HeaderLink);
