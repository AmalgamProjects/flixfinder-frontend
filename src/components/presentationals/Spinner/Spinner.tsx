import * as React from 'react';
import Styles from './Spinner.module.scss';
import cx from 'classnames';

interface IOwnProps {
  size?: 'small' | 'big';
  color?: 'light' | 'dark'
}

const Spinner: React.FC<IOwnProps> = ({ size, color }) => {
  const wrapperClassNames = cx({
    [Styles.wrapper]: true,
    [Styles.big]: !size || size === 'big',
    [Styles.small]: size === 'small',
    [Styles.light]: !color || color === 'light',
    [Styles.dark]: color === 'dark'
  });

  return (
    <div className={wrapperClassNames} />
  );
}

export default Spinner;
