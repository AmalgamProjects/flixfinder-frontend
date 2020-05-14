import * as React from 'react';
import Styles from './Heading.module.scss';
import cx from 'classnames';

interface IOwnProps {
  title: string;
  size: 'big' | 'small';
}

const Heading: React.FC<IOwnProps> = ({ title, size }) => {
  const headingClassNames = cx({
    [Styles.heading]: true,
    [Styles.headingBig]: size === 'big',
    [Styles.headingSmall]: size === 'small',
  });

  return (
    <div className={Styles.wrapper}>
      <h1 className={headingClassNames}>{title}</h1>
    </div>);
};

export default Heading;
