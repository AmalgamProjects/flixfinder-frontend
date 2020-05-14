import * as React from 'react';
import cx from 'classnames';
import Styles from './Heading.module.scss';

interface IOwnProps {
  title: string;
  size: 'big' | 'small';
}

const Heading: React.FC<IOwnProps> = ({ title, size }) => {
  const heading = cx({
    [Styles.heading]: true,
    [Styles.headingBig]: size === 'big',
    [Styles.headingSmall]: size === 'small',
  });

  return (
    <div className={Styles.wrapper}>
      <h1 className={heading}>{title}</h1>
    </div>);
};

export default Heading;
