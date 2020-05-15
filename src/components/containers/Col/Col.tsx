import * as React from 'react';
import Styles from './Col.module.scss';
import cx from 'classnames';

interface IOwnProps {
  cols?: 1 | 2 | 4;
}

const Col: React.SFC<IOwnProps> = ({ children, cols }) => {
  const colClassNames = cx({
    [Styles.oneColumn]: cols === 1,
    [Styles.twoColumn]: cols === 2,
    [Styles.fourColumn]: !cols || cols === 4,
  });

  return <div className={colClassNames}>{children}</div>;
};

export default Col;
